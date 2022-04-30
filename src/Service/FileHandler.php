<?php

namespace App\Service;

use App\Entity\Category;
use ErrorException;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class FileHandler 
{
    private $products_images_dir;
    private $slugger;
    private $uploadFolder = '/var/www/public/uploads/';

    public function __construct(SluggerInterface $slugger,string $products_images_dir) 
    {
        $this->products_images_dir = $products_images_dir;
        $this->slugger = $slugger;
    }
   
    public function uploadImages(array $images, $category)
    {
        /* *** Uploads images from the product form. *** */
        /* path for the folder is combination of uploads folder with category name */
        
       $uploadDir =  $this->products_images_dir . '/' . $category->getName() . '/';
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

    // Adds full folder path to image file name =
    public function getImagesWithPaths(array $images, Category $category)
    {
        $imagesWithPaths = [];
        // dump($images);
        // dump($category->getName());
                foreach($images as $image) {
                    if ($image == null) {
                        return null;
                    }
                    $imagesWithPaths[] = '/' . $this->products_images_dir . '/' .
                        $category->getName() .  '/' . $image;
                }
           
        return $imagesWithPaths;
    }
}