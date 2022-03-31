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
       
    #[Route('accounto', name: 'accounto')]
    public function customerAccount(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            dump("test");
            exit;
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $this->redirectToRoute('home');
        }

        return $this->render('shop/custom.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
