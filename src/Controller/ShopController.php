<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Stock;
use App\Entity\Brand;
use App\Entity\Size;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\FileHandler;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ShopController extends AbstractController
{
    private ManagerRegistry $doctrine;
    private FileHandler $fileHandler;
    private $number = 0;
    public $session;
    
    /**
     * Prepares Doctrine and FileHandler for better access
     */
    public function __construct(
            ManagerRegistry $doctrine, 
            FileHandler $fileHandler) 
    {   
        $this->doctrine = $doctrine;
        $this->fileHandler = $fileHandler;
    }

    /**
     * Opens main page of
     */
    #[Route('/', name: 'home')]
    public function index(
            FileHandler $fileHandler, 
            SessionInterface $session, 
            Request $request): Response
    {
      
        $products = $this->doctrine->getRepository(Product::class)->getProducts('Dresses', 4);
        $products = $this->addPathToImages($products, 'Dresses');
        
        return $this->render('shop/index.html.twig', [
            'products' => $products
        ]);
    }

    /**
     * Displays latest products
     */
    #[Route('/latest-products', name: "latest_products")]
    public function latestProducts()
    {
        return $this->render('shop/latest-products.html.twig');
    }

    /**
     * Shows single product with photos and description on the screen 
     */
    #[Route('/item-single/{id}', name: "item-single")]
    public function itemSingle(
                    $id, 
                    FileHandler $fileHandler
                    ): Response
    {
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
            $stocks[] = $stock;
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
    /**
     * Displays filtered products depending on brand, select price range, etc.
     */
    #[Route('/items-filter/{sizes}/{brands}/{priceFrom}/{priceTo}/{category}/{searchText}/{sortBy}/{page}', 
            name: "items_filter",
            options: ['expose' => true],
            defaults: [
                'sizes' => 'noSizes',
                'brands' => 'noBrands',
                'priceFrom' => 0,
                'priceTo' => 99999,
                'category' => 'allCats',
                'searchText' => 'none',
                'sortBy' => 'noSort',
                'page' => 1
            ],
           )]
          
    public function itemsFilter(
                        $sizes,
                        $brands,
                        $priceFrom,
                        $priceTo,
                        $category, 
                        $searchText,
                        $sortBy,
                        $page
                        )
    {

       // dump($request->query->get('sizes'));
       $allBrands = $this->doctrine->getRepository(Brand::class)->findAllBrands();
       $allSizes = $this->doctrine->getRepository(Size::class)->getChoices();
       $allCats = $this->doctrine->getRepository(Category::class)->findAllTheLeafNodes();
       $allCategories = [];
       if ($category === 'allCats') {
        foreach($allCats as $name) {
            $allCategories[] = $name['name'];
       }
    }
        $products = $this->doctrine->getRepository(Product::class)->
                getSpecificProductsPaginated(
                    page: $page, 
                    category: $category === 'allCats' ? $allCategories : explode(',', $category), 
                    sizes: $sizes === 'noSizes' ? $allSizes : explode(',', $sizes),
                    brands: $brands === 'noBrands' ? $allBrands : explode(",", $brands),
                    priceFrom: $priceFrom,
                    priceTo: $priceTo,
                    searchText: $searchText,
                    sortBy: $sortBy
                );
   
        return $this->render('shop/items-category.html.twig', [
            'products' => $products,
            'brands' => $allBrands,
            'sizes' => $allSizes,
            'sizesChecked' => explode(',', $sizes),
            'brandsChecked' => explode(',', $brands),
            'priceFromInput' => $priceFrom,
            'priceToInput' => $priceTo,
            'searchText' => $searchText
           ]);
    }
    #[Route('products-parent-category/{category}', name: 'products_parent_category')]
    public function productsParentCategory($category)
    {

        $categories = $this->doctrine->getRepository(Category::class)->findImmediateChildren($category);
        return $this->redirectToRoute('items_filter', [
         'category' => $categories
        ]
    );
    }

    /** Works in background 
     * Its called from JS function and passes data from LocalStorage to PHP
     */

    #[Route('checkout', name: 'checkout')]
    public function checkout(
                    Request $request, 
                    SessionInterface $session)
    {

       $name = json_decode($request->request->get('nemo'));
        $data = $request->getContent();
        $dataDecoded = json_decode($data, true);
        $session->set('data', $dataDecoded['data']);
    
        return new JsonResponse("success");
        //return $this->render('shop/shopping-bag.html.twig');
    }
    #[Route('shopping-bag', name: 'shopping_bag')]
    public function shoppingBag(Request $request, SessionInterface $session)
    {
        $productsPrice = 0;
            if ( $session->get('data') != null )  {
                $data = $session->get('data');
                foreach($data as $product) {
                    $productsPrice += $product['price'] * $product['qty'];
                }
            } else {
            $data = [];
        }
        return $this->render('shop/shopping-bag.html.twig', [
            'products' => $data,
            'productsPrice' => $productsPrice
        ]);
        //return $this->render('shop/shopping-bag.html.twig');
    }

    /**
     * Removes item from the shopping bag. Must remove selected item only
     */
    #[Route('delete-from-bag/{id}', name: 'delete_from_bag')]
    public function deleteFromBag($id, SessionInterface $session) {
        //dump($session->get('data'));
        $sessionArray = $session->get('data');
       
       foreach($sessionArray as $key =>$item) {
            if ($item['id'] == $id ) {
                unset($sessionArray[$key]);
                $session->set('data',$sessionArray);
                $this->addFlash(
                   'success',
                   'Item removed from shopping list'
                );
            }
       }

        return $this->redirectToRoute('shopping_bag');
    }
    #[Route('clear-cart', name: 'clear_cart')]
    public function clearCart(SessionInterface $session) 
    {
        $session->set('data', null);
        return $this->redirectToRoute('shopping_bag');
    }
    /** 
     * No route functions
     */
    private function addPathToImages($products, string $category)
    {
        foreach($products as &$product) {
            $images = $this->fileHandler->getImagesWithPaths($product['images'], null, $category);
            $product['images'] = $images;
        }
        return $products;
    }
}
