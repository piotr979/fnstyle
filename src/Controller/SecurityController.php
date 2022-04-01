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
use App\Form\LoginForm;
class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]

    public function login(Request $request, AuthenticationUtils $authenticationUtils, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
   
    $error = $authenticationUtils->getLastAuthenticationError();
    $lastUsername = $authenticationUtils->getLastUsername();

    $regForm = $this->createForm(RegistrationFormType::class, null, [
        'action' => $this->generateUrl('app_register')
    ]);

    return $this->render('customer/customer-account.html.twig', [
        'regForm' => $regForm->createView(),
        'last_username' => '', 'error' => ''
    ]);
    }
    
    #[Route(path: '/logout', name: 'app-logout')]
    public function logout(): void
    {
    }
}
