<?php

namespace App\Controller;

use App\Form\ContactUsType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
class MiscController extends AbstractController
{
    /* Redirecting to uploads when uploader plugin sends AJAX request */
    /* For now it's DISABLED as images are uploaded by form submission */
    /* https://plugins.krajee.com/file-input#usage */
    public function uploadAction (Request $request )  
    {
        $form = $this->createFormBuilder ()->getForm () ;
        $form->handleRequest($request) ;
        return $this-> render ( 'AcmeAcmeBundle:Default:dropzone.html.twig' , array ( 
            'form' => $form->createView () 
        )) ;
    }

    #[Route('/contact-us', name: 'contact_us')]
    public function contactUs()
    {
        $contactForm = $this->createForm(ContactUsType::class);

        if ($contactForm->isSubmitted() && $contactForm->isValid())
            {
                return $this->redirectToRoute('shop/contact-us-submitted.html.twig');
            }
        return $this->render('shop/contact-us.html.twig', [
            'contactForm' => $contactForm->createView()
        ]);
    }
}
