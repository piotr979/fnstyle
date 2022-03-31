<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\RegistrationFormType;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;


class CustomerController extends AbstractController
{
    #[Route('/customer-account', name: 'customer_account')]
    public function customerAccount(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $regForm = $this->createForm(RegistrationFormType::class, $user);
        $regForm->handleRequest($request);
        if ($regForm->isSubmitted() && $regForm->isValid()) {

            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $regForm->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $this->redirectToRoute('home');
        }
        return $this->render('customer/customer-account.html.twig', [
            'regForm' => $regForm->createView()
        ]);
    }

    #[Route('/customer-cart', name: 'customer-cart')]
    public function customerCart()
    {
        return $this->render('shop/customer-cart.html.twig');
    }
}
