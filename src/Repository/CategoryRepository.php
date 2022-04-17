<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\Query\AST\Node;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    private $conn;
    private PaginatorInterface $paginator;
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Category::class);
        $this->paginator = $paginator;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Category $entity, bool $flush = true): void
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
    public function remove(Category $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }
    public function findWithPagination(int $page, string $class)
    {
        $conn = $this->getEntityManager()->getConnection();
        $qb = $this->createQueryBuilder('c')
            ->select('c.name, c.id, c.lft, c.rgt')
            ->where('c.removable = true')
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
    public function findWithPaginationAndParent(int $page, string $class)
    {
        $conn = $this->getEntityManager()->getConnection();
        $qb = $this->createQueryBuilder('c')
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
    public function findAllWithParentPaginated(int $page)
    {
     $conn = $this->getEntityManager()->getConnection();
    $sql = '
    SELECT id,name, (SELECT name
         FROM category t2
               WHERE t2.lft < t1.lft AND t2.rgt > t1.rgt    
             LIMIT 1  
             ) AS parent
      FROM category t1;
    ';

    $stmt = $conn->prepare($sql);
    
    $resultSet = $stmt->executeQuery();
    return $this->paginator->paginate($resultSet->fetchAllAssociative(), $page, 10);

    dump($resultSet->fetchAllAssociative());exit;
    }
   public function findSinglePathWithParent(string $category)
   {
    $conn = $this->getEntityManager()->getConnection();
    $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('parent.name')
        ->from('App\Entity\Category', 'node')
        ->from('App\Entity\Category', 'parent')
        ->where('node.lft BETWEEN parent.lft AND parent.rgt AND node.name = :itemName')
        ->setParameter('itemName', $category)
        ->orderBy('parent.lft')
        ;
        $query = $qb->getQuery()->getResult();
        dump($query);exit;
      
   }
    public function findAllTheLeafNodes()
    {
        $conn = $this->getEntityManager()->getConnection();
        $qb = $this->createQueryBuilder('c')
            ->select('c.name')
            ->where('c.rgt = c.lft + 1')
            ->getQuery()
            ->getResult();
            return $qb;
    }
    public function findAllWithParents()
    {
        $qb = $this->createQueryBuilder('c')
            ->select('c.name')
            ->where('c.rgt - 1 != c.lft ')
            ->getQuery()
            ->getResult();
            
            return $qb;
    }

    // }
    // /**
    //  * @return Category[] Returns an array of Category objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Category
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}


      
