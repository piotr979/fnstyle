<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Brand;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Category;
use App\Service\FileHandler;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    private PaginatorInterface $paginator;
    private ManagerRegistry $doctrine;
    private FileHandler $fileHandler;
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator, FileHandler $fileHandler)
    {
        parent::__construct($registry, Product::class);
        $this->doctrine = $registry;
        $this->paginator = $paginator;
        $this->fileHandler = $fileHandler;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Product $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(Product $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }
    public function findAllPaginated(int $page, string $category, string $sorting )
    {
        $qb = $this->createQueryBuilder('p')
        ->leftJoin('p.category', 'c')
        ->leftJoin('p.brand', 'b')
        ->leftJoin('p.stocks', 'stock')
        ->select('p.id, b.name AS brand, p.model, p.price, SUM (stock.qty) AS total_qty,
            c.name AS category')
        ->groupBy('p.id')
        ->getQuery()
        ->getResult()
        ;
       
        if (isset($qb)) {
            $paginated = $this->paginator->paginate($qb, $page, 10);
            return $paginated;
        } else {
            return null;
        }
    }
  
     /**
     * This is most versatile function for filtering products
     */
    public function getSpecificProductsPaginated(
        int $page,
        array $category,
        array $sizes,
        array $brands,
        int $priceFrom,
        int $priceTo,
        string $searchText,
        string $sortBy
        ) 
{

    $conn = $this->getEntityManager()->getConnection();

        $qb = $this->createQueryBuilder('p');

        $qb->select("p.id, p.price, stock.qty, p.images,
        p.date,
        p.model, s.size AS size, c.name AS color,
        b.name AS brand, category.name AS catName ")
        ->leftJoin('p.stocks', 'stock')
        ->leftJoin('p.brand', 'b')
        ->leftJoin('stock.size','s')
        ->leftJoin('stock.color', 'c')
        ->leftJoin('p.category', 'category')
        ->where('category.name IN ( :category) ');
        if ($searchText != 'none') {
             
            $qb->andWhere('p.model LIKE :words')
            ->setParameter('words', '%' . $searchText .'%' );
        }

        $qb->andWhere('p.price > :priceFrom')
        ->andWhere('s.size IN (:sizes)')
        ->andWhere('p.price < :priceTo')
        ->andWhere('b.name IN (:brands)')
        ->setParameter('priceFrom', $priceFrom)
        ->setParameter('priceTo', $priceTo)
        ->setParameter('sizes', $sizes, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
        ->setParameter('category', $category, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
        ->setParameter('brands', $brands, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
        ->groupBy('p.model');

      
    
        if ($sortBy = 'latest') {
            $qb->orderBy('p.date', 'DESC')
            ;
        }
        $result = $qb->getQuery()->execute();
      
    if (isset($result)) {
      
        $data = $this->addPathToImages($result, 'Dresses');
        
        $paginated = $this->paginator->paginate($data, $page, 16);
        return $paginated;
    } else {
        return null;
    }
}

    /**
     * This is most versatile function for filtering products
     */
    public function getSpecificProductsPaginated2(
            int $page,
            array $category,
            array $sizes,
            array $brands,
            int $priceFrom,
            int $priceTo,
            string $searchText,
            string $sortBy
            ) 
    {
   
        $conn = $this->getEntityManager()->getConnection();

            $qb = $this->createQueryBuilder('p');

            $qb->select("p.id, p.price, stock.qty, p.images,
            p.date, category.name,
            p.model, s.size AS size, c.name AS color,
            b.name AS brand, category.name AS catName")
            ->leftJoin('p.stocks', 'stock')
            ->leftJoin('p.brand', 'b')
            ->leftJoin('stock.size','s')
            ->leftJoin('stock.color', 'c')
            ->leftJoin('p.category', 'category')
            ->where('category.name IN ( :category) ');

            if ($searchText != 'none') {
             
                $qb->andWhere('p.model LIKE :words')
                ->setParameter('words', '%' . $searchText .'%' );
            }
            $qb->andWhere('s.size IN (:sizes)')
            ->andWhere('b.name IN (:brands)')
            ->andWhere('p.price > :priceFrom')
            ->andWhere('p.price < :priceTo')
            ->setParameter('category', $category, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
            ->setParameter('sizes', $sizes, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
            ->setParameter('brands', $brands, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
            ->setParameter('priceFrom', $priceFrom)
            ->setParameter('priceTo', $priceTo)
            ->groupBy('p.model')
            ;

            if ($sortBy = 'latest') {
                $qb->orderBy('p.date', 'DESC')
                ;
            }
           
           
            $result = $qb->getQuery()->execute();
     
        if (isset($result)) {
          
            $data = $this->addPathToImages($result, 'Dresses');
            
            $paginated = $this->paginator->paginate($data, $page, 16);
            return $paginated;
        } else {
            return null;
        }
    }
    public function getProducts(string $category, int $amount)
    {

        $qb = $this->createQueryBuilder('p')
            ->select('p.id, b.name AS brand, p.model, p.price, c.name AS catName, p.images ')
            ->innerJoin('p.brand', 'b')
            ->innerJoin('p.category', 'c')
            ->where('c.name = :catName')
            ->setParameter('catName', $category)
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult()
           
            ;
            return $qb;
    }
    public function getSingleProduct(int $productId)
    {
        $qb = $this->createQueryBuilder('p')
        ->select('p.id, b.name AS brand, p.model, p.price, c.name AS catName, p.images, 
                stock.qty, size.size, color.name ')
        ->innerJoin('p.brand', 'b')
        ->innerJoin('p.category', 'c')
        ->leftJoin('p.stocks', 'stock')
        ->leftJoin('stock.size', 'size')
        ->leftJoin('stock.color', 'color')
        ->where('p.id = :productId')
        ->setParameter('productId', $productId)
        ->getQuery()
        ->getResult()
       
        ;
        return $qb;
    }
    // public function findAllRelatedStock(int $id)
    // {
    //     $qb = $this->createQueryBuilder('p')
    //         ->select('p.model,
    //                  b.name, 
    //                  s.qty, 
    //                  c.id, 
    //                  c.name AS colorName, 
    //                  size.size AS stockSize')
    //         ->innerJoin('p.brand', 'b')
    //         ->innerJoin('p.stocks','s')
    //         ->leftJoin('s.color', 'c')
    //         ->leftJoin('s.size', 'size')
    //         ->where('p.id = :id')
    //         ->setParameter('id', $id)
    //         ->getQuery()
    //         ->getResult()
    //         ;
    //        return $qb;
    // }


    // /**
    //  * @return Product[] Returns an array of Product objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Product
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    private function addPathToImages($products)
    {
        foreach($products as &$product) {
            $images = $this->fileHandler->
                getImagesWithPaths($product['images'], null, 
                                    preg_replace('/\s+/', '_', 
                                    $product['catName'])
                                );
            $product['images'] = $images;
        }
        return $products;
    }
}
