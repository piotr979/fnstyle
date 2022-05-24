<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Brand;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Category;
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
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Product::class);
        $this->paginator = $paginator;
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
    public function findAllRelatedStock(int $id)
    {
        $qb = $this->createQueryBuilder('p')
            ->select('p.model,
                     b.name, 
                     s.qty, 
                     c.id, 
                     c.name AS colorName, 
                     size.size AS stockSize')
            ->innerJoin('p.brand', 'b')
            ->innerJoin('p.stocks','s')
            ->leftJoin('s.color', 'c')
            ->leftJoin('s.size', 'size')
            ->where('p.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
            ;
           return $qb;
    }


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
}
