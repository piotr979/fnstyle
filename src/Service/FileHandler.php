<?php

namespace App\Service;

use ErrorException;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class FileHandler 
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }
    public function uploadImages(array $images, $category)
    {
        /* *** Uploads images from the product form. *** */
        /* path for the folder is combination of uploads folder with category name */
        
       $uploadDir = '/var/www/uploads/' . $category->getName() . '/';
       $imagesUrlList = [];
       foreach($images as $image) {
            $originalFilename = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $this->slugger->slug($originalFilename);
            $newFilename = $safeFilename.'-' . uniqid() . '.' . $image->guessExtension();
            
            try {
                $image->move(
                    $uploadDir,
                    $newFilename
                );
            } catch (FileException $e) {
                throw new ErrorException('Could not upload the images.');
            }
            $imagesUrlList[] = $newFilename;
       }
       return $imagesUrlList;
    }
}