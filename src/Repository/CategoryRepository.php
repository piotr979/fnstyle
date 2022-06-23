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

 /* categories are based on adjacency 
 /* http://download.nust.na/pub6/mysql/tech-resources/articles/hierarchical-data.html
*/

class CategoryRepository extends ServiceEntityRepository
{
    private $conn;
    private PaginatorInterface $paginator;
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Category::class);
        $this->conn = $this->getEntityManager()->getConnection();
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
    /* NOT IN USE */
    public function findWithPagination(int $page, string $class)
    {
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
    
    public function findAllPaginated(int $page)
    {
    $sql = '
    SELECT id,name, (SELECT name
         FROM category t2
               WHERE t2.lft < node.lft AND t2.rgt > node.rgt    
             LIMIT 1  
             ) AS parent
      FROM category node;
    ';
    $stmt = $this->conn->prepare($sql);
    $resultSet = $stmt->executeQuery();
    return $this->paginator->paginate($resultSet->fetchAllAssociative(), $page, 10);
    }

    /* NOT IN USE */
    public function getAllParents()
    {
        $qb = $this->createQueryBuilder('c')
        ->select('c.name, c.lft, c.rgt')
        ->where('c.lft != (c.rgt - 1)')
        ->getQuery()
        ->getResult()
        ;
        return $qb;
    }

    
   public function findSinglePathWithParent(string $category)
   {
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
    public function findImmediateChildren($category)
    {

        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('node.name')
        ->from('App\Entity\Category', 'node')
        ->from('App\Entity\Category', 'parent')
        ->where('node.lft > parent.lft AND node.rgt < parent.rgt AND parent.name = :itemName')
        ->setParameter('itemName', $category)
        ->orderBy('parent.lft')
        ;
        $query = $qb->getQuery()->getResult();
        $cats = [];
        foreach($query as $name) {
            $cats[] = $name['name'];
        }
        if (empty($cats)) {
            // if empty means no categories are children ones
            // return parent
            return $category;
        }
       return implode(',',$cats);
    

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
    public function addNewCategoryIntoExisting($existingParentCategory, $name)
    {
        $sql = "
        LOCK TABLES category WRITE;
        SELECT @myLeft := lft FROM category
        WHERE name = :exisitingParentCategory;
    UPDATE category SET rgt = rgt + 2 WHERE rgt > @myLeft;
    UPDATE category SET lft = lft + 2 WHERE lft > @myLeft;
        INSERT INTO category(name, lft, rgt, removable) VALUES( :newCatName,  @myLeft + 1, @myLeft + 2, true);
        UNLOCK TABLES;

        ";
        $stmt = $this->conn->prepare($sql);
        $resultSet = $stmt->executeQuery(
            ['exisitingParentCategory' => $existingParentCategory,
            'newCatName' => $name
                    ]);
    }
    public function addNewCategoryAfterExisting($existingParentCategory, $name)
    {
        $sql = "
            LOCK TABLES category WRITE;
            SELECT @myRight := rgt FROM category
            WHERE name = :existingParentCategory;
            UPDATE category SET rgt = rgt + 2 WHERE rgt > @myRight;
            UPDATE category SET lft = lft + 2 WHERE lft > @myRight;
            INSERT INTO category(name, lft, rgt, removable) VALUES( :newCatName, @myRight + 1, @myRight + 2, true);

            UNLOCK TABLES;

        ";
        $stmt = $this->conn->prepare($sql);
        $resultSet = $stmt->executeQuery(
            ['exisitingParentCategory' => $existingParentCategory,
            'newCatName' => $name
                    ]);
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


      
