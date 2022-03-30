<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\CustomerProfileType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;

class SecurityController extends AbstractController
{
    #[Route('/customer-account', name: 'customer-account')]
    public function customerAccount(AuthenticationUtils $authenticationUtils, Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response 
    {
          // get the login error if there is one
          $error = $authenticationUtils->getLastAuthenticationError();
          // last username entered by the user
          $lastUsername = $authenticationUtils->getLastUsername();
          
        $user = new User();
        $regForm = $this->createForm(RegistrationFormType::class, $user);
        $regForm->handleRequest($request);

        if ($regForm->isSubmitted() && $regForm->isValid()) {
            dump("Regform");
            // encode the plain password
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

        return $this->render('shop/customer-account.html.twig', [
            'last_username' => $lastUsername, 
            'error' => $error,
            'registrationForm' => $regForm->createView(),
        ]);
        return $this->render('shop/customer-account.html.twig');
    }

    #[Route(path: '/customer-profile', name: 'customer-profile')]
    public function customerProfile()
    {
        $user = new User();
        $profileForm = $this->createForm(CustomerProfileType::class, $user);

        if ($profileForm->isSubmitted() && $profileForm->isValid()) {
            dump("Updated");
            return $this->redirectToRoute('customer-profile');
        }
    
        return $this->render('security/customer-profile.html.twig', [
            'profileForm' => $profileForm->createView()
        ]);
    }

    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/logout', name: 'app-logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
