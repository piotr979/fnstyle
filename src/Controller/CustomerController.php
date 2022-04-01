<?php

namespace App\Controller;

use App\Entity\Address;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\CustomerProfileType;
use App\Form\LoginForm;
use App\Form\RegistrationFormType;
use App\Security\CustomerAuthenticator;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class CustomerController extends AbstractController
{
    #[Route('/customer-cart', name: 'customer-cart')]
    public function customerCart()
    {
        return $this->render('customer/customer-cart.html.twig');
    }

    #[Route('customer-profile', name: 'customer_profile')]
    public function customerProfile(Request $request, EntityManagerInterface $em)
    {
        $user = $this->getUser();

        $profileForm = $this->createForm(CustomerProfileType::class, $user);
        $profileForm->handleRequest($request);

        if ($profileForm->isSubmitted() && $profileForm->isValid()) {
            $data = $profileForm->getData();

            dump($data);exit;
            $em->flush();
            
        }
        return $this->render('customer/customer-profile.html.twig', [
            'profileForm' => $profileForm->createView()
        ]);
    }
}
