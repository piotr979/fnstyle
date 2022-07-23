<?php

namespace App\Repository;

use App\Entity\Stock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
/**
 * @method Stock|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stock|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stock[]    findAll()
 * @method Stock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StockRepository extends ServiceEntityRepository
{
    private PaginatorInterface $paginator;

    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Stock::class);
        $this->paginator = $paginator;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Stock $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }
    public function getProductStock(int $product)
    {
        $qb = $this->createQueryBuilder('s')
        ->select('s.qty, p.model')
        ->leftJoin('s.product', 'p')
        ->leftJoin('s.color', 'c')
        ->getQuery()
        ->getResult()
        ;
        dump($qb);exit;
      return $qb;
      
    }
    public function findAllRelatedToProduct(int $productId)
    {
        $qb = $this->createQueryBuilder('s')
            ->select('s.qty, c.name AS colorName, size.size')
            ->innerJoin('s.color', 'c')
            ->innerJoin('s.size', 'size')
            ->where('s.product = :productId')
            ->setParameter('productId', $productId)
            ->getQuery()
            ->getResult()
            ;
        return $qb;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(Stock $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    public function countStock()
    {
        $qb = $this->createQueryBuilder('s')
        ->select('COUNT(s.qty) AS stockQty')
        ->getQuery()
        ->getResult()
        ;

        return $qb[0]['stockQty'];
    }
    // /**
    //  * @return Stock[] Returns an array of Stock objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Stock
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
