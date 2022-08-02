<?php

namespace App\DataFixtures;

use App\Entity\Size;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SizeFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $sizes = [
            '32','34','36','38','40','42','44','46','48','50',
            'XS','S','M','ML','L','XL','XXL'
        ];
        foreach($sizes as $size) {
            $se = new Size();
            $se->setSize($size);
            $manager->persist($se);
        }
        $manager->flush();
    }

}