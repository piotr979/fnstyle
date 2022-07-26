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
        $form->handleRequest ( $request ) ;
        if ( $form->isValid ()) {  
            
          
        }
        return $this-> render ( 'AcmeAcmeBundle:Default:dropzone.html.twig' , array ( 
            'form' => $form->createView () 
        )) ;
    }

    #[Route('/upload-target', name: 'upload-target')]
    public function uploads()
    {
      $uploaddir = '/var/www/uploads/';
      $uploadfile = $uploaddir . basename($_FILES['product']['name']['images'][0]);
      if (move_uploaded_file($_FILES['product']['tmp_name']['images'][0], $uploadfile)) {
        return new JsonResponse(array('' => ''));
    } else {
        return new JsonResponse(array('' => ''));
    }
    //   $file = $_FILES['product']['tmp_name']['images'][0];
    //   $file->move_uploaded('/uploads');
     
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
