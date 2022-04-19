<?php

namespace App\DataFixtures;

use App\Entity\Color;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ColorFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $colors = ["Blue ", "Green", "Red", "Orange", 
        "Violet", "Indigo", "Yellow "];

        foreach($colors as $color) {
            $clr = new Color();
            $clr->setName($color);
            $manager->persist($clr);
        }
       
        $manager->flush();
    }
}