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
    private FileHandler $fileHandler;
    public function __construct(ManagerRegistry $doctrine, FileHandler $fileHandler) 
    {   
        $this->doctrine = $doctrine;
        $this->fileHandler = $fileHandler;
    }
    #[Route('/', name: 'home')]
    public function index(FileHandler $fileHandler): Response
    {
        $products = $this->doctrine->getRepository(Product::class)->getProducts('Dresses', 4);
        $products = $this->addPathToImages($products, 'Dresses');
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
        
        $productsList = $this->doctrine->getRepository(Product::class)->
                getProducts($product->getCategory()->getName(),
                    4);
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
            'productsList' => $this->addPathToImages($productsList, 
                preg_replace('/\s+/', '_', 
                $product->getCategory()->getName())),
            'images' => $images,
            'stocks' => $stocks
        ]);
    }


    #[Route('/items-category/{category}', name: "items_category")]
    public function itemsCategory($category = 'default')
    {
        $products = $this->doctrine->getRepository(Product::class)->getProducts('Dresses',8);
        $products2 = $this->doctrine->getRepository(Product::class)->
                getSpecificProductsPaginated(
                    1, 
                    'Dresses', 
                    [2,3],
                    ['Madextreme'],
                    10,
                    30
                );
        return $this->render('shop/items-category.html.twig', [
            'products' => $this->addPathToImages($products, 
            preg_replace('/\s+/', '_', 
            'Dresses'))
        ]);
    }

    #[Route('shopping-bag', name: 'shopping_bag')]
    public function shoppingBag()
    {
        return new Response('shopping bag');
    }

    private function addPathToImages($products, string $category)
    {
        foreach($products as &$product) {
            $images = $this->fileHandler->getImagesWithPaths($product['images'], null, $category);
            $product['images'] = $images;
        }
        return $products;
    }
  
}
