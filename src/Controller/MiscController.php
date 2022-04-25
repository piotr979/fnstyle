<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
class MiscController extends AbstractController
{
    /* Redirecting to uploads when uploader plugin sends AJAX request */
    /* For now it's DISABLED as images are uploaded by form submission */
    /* https://plugins.krajee.com/file-input#usage */
    #[Route('/uploads', name: 'uploads')]
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
}
