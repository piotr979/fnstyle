<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\BasicForm;
use App\Entity\User;
use App\Entity\Stock;
use App\Entity\Brand;
use App\Entity\Size;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\RegistrationFormType;
use App\Service\FileHandler;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ShopController extends AbstractController
{
    private ManagerRegistry $doctrine;
    private FileHandler $fileHandler;
    private $number = 0;
    public $session;
    public function __construct(ManagerRegistry $doctrine, FileHandler $fileHandler) 
    {   
        $this->doctrine = $doctrine;
        $this->fileHandler = $fileHandler;
    }
    #[Route('/', name: 'home')]
    public function index(FileHandler $fileHandler, SessionInterface $session): Response
    {
        $session->set('name', 'icek');
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
       $brands = $this->doctrine->getRepository(Brand::class)->findAll();
       $sizes = $this->doctrine->getRepository(Size::class)->findAll();
        $products = $this->doctrine->getRepository(Product::class)->
                getSpecificProductsPaginated(
                    page: 1, 
                    category: 'Dresses', 
                    sizes: [2,3],
                    brands: ['Madextreme'],
                    priceFrom: 10,
                    priceTo: 30
                );
            
        return $this->render('shop/items-category.html.twig', [
            'products' => $products,
            'brands' => $brands,
            'sizes' => $sizes
           ]);
    }
    #[Route('/items-filter/{sizes}/{brands}/{priceFrom}/{priceTo}', 
            name: "items_filter",
            defaults: [
                'sizes' => '',
                'brands' => '',
            ],
            options: ['expose' => 'true'])]
    public function itemsFilter($sizes = '',
                                $brands = '',
                                $priceFrom = 0,
                                $priceTo = 999999)
    {
    
       $brand = $this->doctrine->getRepository(Brand::class)->findAll();
       $size = $this->doctrine->getRepository(Size::class)->findAll();
       if ($sizes === '') {
        foreach ($size as $item) {
            $sizes .= $item->getSize();
            $sizes .= ',';
        }
       }
       
        $products = $this->doctrine->getRepository(Product::class)->
                getSpecificProductsPaginated(
                    page: 1, 
                    category: 'Dresses', 
                    sizes: $sizes === '' ? $size : $sizes,
                    brands: $brands,
                    priceFrom: $priceFrom,
                    priceTo: $priceTo
                );
         
        return $this->render('shop/items-category.html.twig', [
            'products' => $products,
            'brands' => $brand,
            'sizes' => $size
           ]);
    }

    #[Route('checkout', name: 'checkout')]
    public function checkout(Request $request, SessionInterface $session)
    {
       $name = json_decode($request->request->get('nemo'));
      
        $data = $request->getContent();
        $dataDecoded = json_decode($data, true);
        $session->set('data', $dataDecoded);
    
        return new JsonResponse("success");
        //return $this->render('shop/shopping-bag.html.twig');
    }
    #[Route('shopping-bag', name: 'shopping_bag')]
    public function shoppingBag(Request $request, SessionInterface $session)
    {
        $items = $request->get('shopping-cart');
            if (isset($session->get('data')['data']) ) {
                $data = $session->get('data')['data'];
            } else {
            $data = [];
        }
        return $this->render('shop/shopping-bag.html.twig', [
            'products' => $data
        ]);
        //return $this->render('shop/shopping-bag.html.twig');
    }
    
    #[Route('clear-cart', name: 'clear_cart')]
    public function clearCart(SessionInterface $session) 
    {
        $session->set('data', null);
        return $this->redirectToRoute('shopping_bag');
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
