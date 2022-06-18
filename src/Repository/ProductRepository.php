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
    public function getSpecificProductsPaginated(
            int $page,
            string $category,
            array $sizes,
            array $brands,
            int $priceFrom,
            int $priceTo) 
    {
        $conn = $this->getEntityManager()->getConnection();
       $sql = "
        SELECT product.id, product.price, stock.qty, product.images,
            product.model, size.size AS size, color.name AS color,
            brand.name AS brand, category.name AS catName
        FROM product
        JOIN stock
        ON product.id = stock.product_id
        JOIN brand
        ON product.brand_id = brand.id
        JOIN category
        ON product.category_id = category.id
        JOIN size
        ON stock.size_id = size.id
        JOIN color
        ON stock.color_id = color.id
        WHERE size IN (32,34) 
        GROUP BY model
        ";
        $stmt = $conn->prepare($sql);
        $query = $stmt->executeQuery();

         $products = $query->fetchAllAssociative();
      
        if (isset($products)) {
          
            $data = $this->addPathToImages($products, 'Dresses');
            
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
                getImagesWithPaths(json_decode($product['images']), null, 
                                    preg_replace('/\s+/', '_', 
                                    $product['catName'])
                                );
            $product['images'] = $images;
        }
        return $products;
    }
}
