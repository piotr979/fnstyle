<?php

namespace App\Controller;

use App\Form\BasicForm;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\RegistrationFormType;

class ShopController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('shop/index.html.twig');
    }

    #[Route('/item-single/{id}', name: "item-single")]
    public function itemSingle($id): Response
    {
        return $this->render('shop/item-single.html.twig');
    }

    #[Route('/items-category/{category}', name: "items-category")]
    public function itemsCategory($category = 'default')
    {
        return $this->render('shop/items-category.html.twig');
    }

  
}
