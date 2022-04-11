<?php

namespace App\DataFixtures;

use App\Entity\Address;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
class UserFixture extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;
    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->passwordHasher = $hasher;
    }
    public function load(ObjectManager $manager): void
    {
       $users = [
           ['email' => 'admin@admin.com',
           'password' => '123456',
           'firstName' => 'Admin',
           'lastName' => 'Admin',
           'addressLine1' => 'no address',
           'addressLine2' => 'no address',
           'city' => 'no city',
           'zip' => 'no zip',
           'phone' => '0000',
           'roles' => ["ROLE_ADMIN"]
       ],
       ['email' => 'user@user.com',
       'password' => '123456',
       'firstName' => 'John',
       'lastName' => 'Rock',
       'addressLine1' => 'Sun view',
       'addressLine2' => '',
       'city' => 'Ballincollig',
       'zip' => 'T23X400',
       'phone' => '514 432123',
       'roles' => ["ROLE_USER"]
       ]
       ];
       
       foreach($users as $single) {
            $user = $this->createUser(
                $single['email'],
                $single['password'],
                $single['firstName'],
                $single['lastName'],
                $single['addressLine1'],
                $single['addressLine2'],
                $single['city'],
                $single['zip'],
                $single['phone'],
                $single['roles'],
                $manager
            );
       }
    }
    public function createUser( 
                    $email,
                    $password, 
                    $firstName,
                    $lastName,
                    $addressLine1,
                    $addressLine2,
                    $city,
                    $zip,
                    $phone,
                    $roles,
                    ObjectManager $manager,
                   )
    {
       

        $address = new Address();
        $address->setAddressLine1($addressLine1);
        $address->setAddressLine2($addressLine2);
        $address->setZipCode($zip);
        $address->setCityName($city);
        $address->setPhoneNumber($phone);

        // Save address first
        $manager->persist($address);
       

        $user = new User();
        $user->setEmail($email);
        $user->setPassword(
            $this->passwordHasher->hashPassword(
                $user,
                $password
            )
        );
        $user->setRoles($roles);
        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setAddress($address);

        $manager->persist($user);
        $manager->flush();
    }
}

