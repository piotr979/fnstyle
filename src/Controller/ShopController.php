<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\BasicForm;
use App\Entity\User;
use App\Entity\Stock;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\RegistrationFormType;
use App\Service\FileHandler;
use Doctrine\Persistence\ManagerRegistry;

class ShopController extends AbstractController
{
    private ManagerRegistry $doctrine;

    public function __construct(ManagerRegistry $doctrine) 
    {
        $this->doctrine = $doctrine;
    }
    #[Route('/', name: 'home')]
    public function index(FileHandler $fileHandler): Response
    {
        $products = $this->doctrine->getRepository(Product::class)->getProducts('Dresses', 4);
        foreach($products as &$product) {
            $images = $fileHandler->getImagesWithPaths($product['images'], null, 'Dresses');
            $product['images'] = $images;
        }
        return $this->render('shop/index.html.twig', [
            'products' => $products
        ]);
    }
    #[Route('/latest-products', name: "latest_products")]
    public function latestProducts()
    {
        return $this->render('shop/latest-products.html.twig');
    }
    #[Route('/item-single/{id}', name: "item-single")]
    public function itemSingle($id, FileHandler $fileHandler): Response
    {
        $sizesReduced = [];
        $product = $this->doctrine->getRepository(Product::class)->find($id);
        $stocks = $this->doctrine->getRepository(Stock::class)->findAllRelatedToProduct($id);
        $images = $fileHandler->getImagesWithPaths($product->getImages(), $product->getCategory(), null);
        if (empty($product)) {
            $this->addFlash('notice', 'This product does not exist.');
            return $this->redirectToRoute('home');
        }
        // if stock is empty add stock object with qty set to zero
        if (empty($stocks)) {
            $stock = new Stock();
            $stock->setQty(0);
            $stocks[]
             = $stock;
    }
    // Product is array with repeated name,brand,etc
    // and separate sizes + colors
        return $this->render('shop/item-single.html.twig', [
            'product' => $product,
            'images' => $images,
            'stocks' => $stocks
        ]);
    }


    #[Route('/items-category/{category}', name: "items-category")]
    public function itemsCategory($category = 'default')
    {
        return $this->render('shop/items-category.html.twig');
    }
  
}
