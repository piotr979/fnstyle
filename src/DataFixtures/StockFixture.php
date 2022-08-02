<?php

namespace App\DataFixtures;

use App\Entity\Stock;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class StockFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $stock = new Stock();
        $stock->setQty(4);
        $manager->persist($stock);
        $manager->flush();
    }

}