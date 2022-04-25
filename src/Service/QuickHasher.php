<?php
namespace App\Service;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Uid\Uuid;

class QuickHasher 
{

    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }
    public function createRandomAndHashedPassword()
    {
        $uuid = Uuid::v4();
        $user = new User();
        $hashedPassword = $this->passwordHasher->hashPassword($user, $uuid);
        return ['newPassword' => $uuid, 
        'hashedPassword' => $hashedPassword
        ];
    }
}