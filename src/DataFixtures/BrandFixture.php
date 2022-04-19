<?php

namespace App\DataFixtures;

use App\Entity\Brand;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class BrandFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $brands = [
            'iEiffel',
            'Jack Ritton',
            'Browon',
            'Simwood',
            'LangBeaar',
            'Milan',
            'Karram',
            'Madextreme',
            'Paws',
            'Cheeheart'
        ];
        foreach($brands as $brand) {
            $brd = new Brand();
            $brd->setName($brand);
            $manager->persist($brd);
        }
       
        $manager->flush();
    }
}