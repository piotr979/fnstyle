<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
       $categories = [ 'Clothes' => [2,46],
        'Womens' => [3,16],
        'Dresses' => [4,5],
        'Blouses' => [6,7],
        'T-shirts' => [8,9],
        'Tops' => [10,11],
        'Pants' => [12,13],
        'Skirts' => [14,15],
        
        'Men' => [17,38],
        'Tops' => [18,19],

        'Outerwear' => [20,29],
        'Jackets' => [21,22],
        'Winter coats' => [23,24],
        'Pants' => [25,26],
        'Shorts' => [27,28],

        'Knitwear' => [30,31],

        'Underwear' => [32,37],
        'Underpants' => [33,34],
        'Socks' => [35,36],

        'Shoes' => [39,46],
        'Boots' => [40,41],
        'Sandals' => [42,43],
        'Flats' => [44,45],

        'Beauty' => [47,60],
        'Tools' => [48,49],
        'Make up' => [50,51],

        'Personal Care' => [52,59],
        'Skin care' => [53,54],
        'Hair care' => [55,56],
        'Body care' => [57,58]
    ];
      foreach($categories as $category => $values)
      {
          $manager->persist($this->createCategory(
              $category, $values[0], $values[1]
          ));
      }
        $manager->persist($this->createCategory('electronic',2,3));
    $manager->flush();
        // $product = new Product();
        // $manager->persist($product);
        // create TABLE Category (
        //    category_id INT AUTO_INCREMENT PRIMARY KEY
        //    name VARCHAR(40) NOT NULL,
         //   lft INT NO NULL,
        //    rgt INT NO NULL
       // )
        $manager->flush();
        
    }
    public function createCategory(string $name, int $lft, int $rgt): Category
    {
        $category = new Category();
        $category->setName($name);
        $category->setLft($lft);
        $category->setRgt($rgt);
        return $category;
    }
}
