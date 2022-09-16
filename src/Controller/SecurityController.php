<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\QuickHasher;
use Doctrine\Persistence\ManagerRegistry;

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
        'last_username' => $lastUsername, 
        'error' => $error
    ]);
    }
    #[Route(path:'/logged-successfully', name: 'logged_successfully')]
    public function loggedSuccessfully()
    {
        $this->addFlash(
           'notice',
           'You\'ve been logged in successfully.'
        );
        return $this->redirectToRoute('home');
    }
    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        $this->addFlash('notice', 'You have been logged out successfully.');
    }
    #[Route(path: 'reset-password/{id}', name: 'reset_password')]
    public function resetPassword(int $id, ManagerRegistry $doctrine, QuickHasher $quickHasher )
    {
        $customer = $doctrine->getRepository(User::class)->find($id);
        if ($customer) {
        $password = $quickHasher->createRandomAndHashedPassword();
        $customer->setPassword($password['hashedPassword']);
        $em = $doctrine->getManager();
        $em->persist($customer);
        $em->flush();
        $this->addFlash(
           'notice',
           sprintf(
           'Password has been reset. Copy and pass to the user&#58; <span class="fw-bold">%s</span>', 
                $password['newPassword'])
        );
        } else {
            throw $this->createNotFoundException('Could not find the customer');
        }
        return $this->redirectToRoute('customers');
    }
}
