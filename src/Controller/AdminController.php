<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Category;
use App\Entity\Color;
use App\Entity\Size;
use App\Entity\Stock;
use App\Entity\User;
use App\Form\CategoryFormType;
use App\Form\StockCollectionType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\CustomerProfileType;
use App\Form\ProductType;
use App\Service\FileHandler;


#[Route('admin')]
class AdminController extends AbstractController
{
    private ManagerRegistry $doctrine; 

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    // ***** PRODUCTS ********** //

    // Redirects to catalog template
    #[Route('/', name: 'admin')]
    public function admin()
    {
        return $this->redirectToRoute('catalog');
    }

    /**
     * Displays main page (list of products)
    */ 
    #[Route('/catalog/{page}/{category}/{sorting}/{searchString}', 
                name: 'catalog',
                options: ['expose' => true],
                defaults: ['sorting' => 'name_desc', 
                            'page' => 1, 
                            'category' => 'all',
                            'searchString' => '']
                )]
    public function index(int $page, string $category, string $sorting, string $searchString): Response
    {
        $repo = $this->doctrine->getRepository(Product::class);
        $stats = $this->getStats();
        $products = $repo->findAllPaginated(
            $page,
            $category,
            $sorting,
            $searchString
        );
        $stocks = $this->doctrine->getRepository(Stock::class);
        return $this->render('admin/catalog.html.twig', [
            'products' => $products,
            'stats' => $stats
        ]);
    }

    /**
     * Subpage that lets admin to add new product (clothes, beauty, etc.)
     */
    #[Route('/add-product', name: 'add_product')]
    public function addProduct(Request $request, 
                    ManagerRegistry $doctrine, 
                    FileHandler $fileHandler
                    )
    {
        $product = new Product();
        $productForm = $this->createForm(ProductType::class, $product);
        $productForm->handleRequest($request);

        if ($productForm->isSubmitted() && $productForm->isValid()) {
            $data = $productForm->getData();
            $images = $fileHandler->uploadImages($data->getImages(), $data->getCategory());
            $product->setImages($images);
            $em = $doctrine->getManager();
            $em->persist($product);
            $em->flush();
            $this->addFlash(
               'notice',
               'New product has been added.'
            );
            return $this->redirectToRoute('admin');
        }
        return $this->render('admin/add-product.html.twig', [
            'productForm' => $productForm->createView()
        ]);
    }

    /**
     * Subpage to edit existing product
     */
    #[Route('/edit-product/{id}', name: 'edit-product')]
    public function editItem($id, 
                            FileHandler $fileHandler, 
                            Request $request
                            ): Response
    {
        $product = $this->doctrine->getRepository(Product::class)->find($id);
        $sizes = $this->doctrine->getRepository(Size::class)->findAll();
        $images = $fileHandler->getImagesWithPaths($product->getImages(), $product->getCategory(), '');
        $existingImages = $product->getImages();
        if ($images === null) {
            $images = [];
        }
        $productForm = $this->createForm(ProductType::class, $product);
        $productForm->handleRequest($request);
        if ($productForm->isSubmitted() && $productForm->isValid()) {
           
            $data = $productForm->getData();
            $em = $this->doctrine->getManager();

            /* Processing image list */
            /* Combines existing image list with added ones */
            if ($data->getImages()) {
                $images = $fileHandler->uploadImages($data->getImages(), $data->getCategory());
                $imagesUploadedAndNewOnes = array_merge($images, $existingImages);
                $product->setImages($imagesUploadedAndNewOnes);
            } else {
                $product->setImages($existingImages);
            }

            $em->persist($product);
            $em->flush();
            $this->addFlash(
               'notice',
               'The product has been updated.'
            );
            return $this->redirectToRoute('catalog');
        }
   
        return $this->render('admin/edit-product.html.twig', [
            'productForm' => $productForm->createView(),
            'sizes' => $sizes,
            'imagesList' => $existingImages,
            'imagesForPreview' => $images
        ]);
    }

    /**
     * Displays all existing stock. 
     * No items can be removed/added. It's done by catalog page
     */
    #[Route('/stock/{page}/{category}/{sorting}/{searchString}',  
                name: 'stock',
                options: ['expose' => true],
                defaults: ['sorting' => 'name_desc', 
                            'page' => 1, 
                            'category' => 'all',
                            'searchString' => ''])]
    public function stock(int $page, string $category, string $sorting, string $searchString): Response
    {
    $repo = $this->doctrine->getRepository(Product::class);
    $stats = $this->getStats();
    $products = $repo->findAllPaginated(
        $page,
        $category,
        $sorting,
        $searchString
    );
    
    return $this->render('admin/stock.html.twig', [
        'products' => $products,
        'stats' => $stats
    ]);
}
    /**
     * Edit existing stock item.
     */
    #[Route('/edit-stock/{productId}', name: 'edit_stock')]
    public function editStock($productId, Request $request): Response
    {
        $productStocks = $this->doctrine->getRepository(Stock::class)->findBy(['product' => $productId]);
        $product = $this->doctrine->getRepository(Product::class)->find($productId);
        if (count($productStocks) > 0 ) {
                foreach ($productStocks as $entry) {
                $product->addStock($entry);
            }
        }

    $stockForm = $this->createForm(StockCollectionType::class, $product);
    $stockForm->handleRequest($request);
     if ($stockForm->isSubmitted() && $stockForm->isValid()) {
         $data = $stockForm->getData();
         $stocks = $data->getStocks();
            if ($stocks) {
                $em = $this->doctrine->getManager();
                foreach ($stocks as $stock) {
                    $stock->setProduct($product);
                    $em->persist($stock);
                }

                $em->flush();
                $this->addFlash('notice', 'Your stock has been modified.');
            }
         
     }
        return $this->render('admin/edit-stock.html.twig', [
            'stockForm' => $stockForm->createView()
        ]);
    }

    /**
     * Sales management page. 
     * TO BE DONE.
     */
    #[Route('/sales', name: 'sales',
                        options: ['expose' => true])]
    public function sales()
    {
        $stats = $this->getStats();
        return $this->render('admin/sales.html.twig', [
            'stats' => $stats
        ]);
    }

     // ***** CUSTOMERS  ********** //

    /**
     * Provides list of all customers.
     */

    #[Route('/customers/{page}/{sorting}/{searchString}', 
                name: 'customers',
                options: ['expose' => true],
                defaults: [
                    'sorting' => 'name_desc', 
                    'page' => 1, 
                    'searchString' => '']
                    )]
    public function getCustomers(int $page, string $sorting, string $searchString): Response
    {
        $stats = $this->getStats();
        $customers = $this->doctrine->getRepository(User::class)->findAllPaginated(
            $page,
            $sorting,
            $searchString
        );
     
        return $this->render('admin/customers.html.twig', [
            'customers' => $customers,
            'stats' => $stats
        ]);
    }

    /**
     * Subpage that lets to edit existing customer's details.
    */
    #[Route('/edit-customer/{id}', name: 'edit-customer')]
    public function editCustomer($id, Request $request): Response
    {
        $user = $this->doctrine->getRepository(User::class)->find($id);
        $profileForm = $this->createForm(CustomerProfileType::class, $user);
        $profileForm->handleRequest($request);

        if ($profileForm->isSubmitted() && $profileForm->isValid()) {
            $updatedUserData = $profileForm->getData();
            $em = $this->doctrine->getManager();
            $em->persist($updatedUserData);
            $em->flush();
            $this->addFlash(
               'notice',
               'User\'s data updated.'
            );

        }

        return $this->render('admin/edit-customer.html.twig', [
            'profileForm' => $profileForm->createView()
        ]);
    }

     // ***** SETTINGS ********** //
    // Displays settings of colors,brands,sizes tabs
    #[Route('/settings/{page}/{class}', name: 'settings')]
    public function settings(int $page=1, string $class="Category"): Response
    {
        $allItems = $this->doctrine->getRepository('App\\Entity\\' . $class)->
            findAllPaginated($page, $class);
        $stats = $this->getStats();
        return $this->render('admin/settings.html.twig', [
            'items' => $allItems,
            'classItem' => $class,
            'page' => $page,
            'stats' => $stats
        ]);
          
    }

    // Save the color,brand,size,etc.
    #[Route('/item-save/{id}/{name}/{class}', name: 'item_save')]
    public function itemCategory(int $id, string $name, string $class)
    {
        $em = $this->doctrine->getManager();
            $item = $this->doctrine->getRepository('App\\Entity\\' . $class)->find($id);

                if (!$item) {
                    throw $this->createNotFoundException(
                        'Item not found. Id number' . $id
                    );
                }
                /* Altough looks same keep it in separate cases
                as it may be extended in future
                */
                switch ($class) {
                    case 'Category':
                    case 'Brand':
                    case 'Color': {
                        $item->setName($name);
                        break;
                    }
                    case 'Size': {
                        $item->setSize($name);
                        break;
                    }
                }
                $em->flush();

        return $this->redirectToRoute('settings', [
            'page' => 1,
            'class' => $class
        ]);
    }

    /**
     * Route to add new category.
     */
    #[Route('/category-add', name: 'category_add')]
    public function addCategory(Request $request)
    {
        $category = new Category();
        $categoryForm = $this->createForm(CategoryFormType::class, $category);
        $categoryForm->handleRequest($request);

        if ($categoryForm->isSubmitted() && $categoryForm->isValid()) {
            /* need to insert between existing data */
            $data = $categoryForm->getData();
            $this->doctrine->getRepository(Category::class)
                        ->addNewCategoryIntoExisting($data->getParentCategory(), 
                                                    $data->getName());
            $this->addFlash('notice','New category inserted.');
            return $this->redirectToRoute('settings');
        }
        return $this->render('admin/add-category.html.twig', [
            'categoryForm' => $categoryForm->createView()
        ]);
    }

    /** 
     * Adds new brand, size,color (form)
    */ 
    #[Route('/item-add/{class}', name: 'item_add')]
    public function itemAdd($class, Request $request)
    {
        if ($class == 'Category') {
            return $this->redirectToRoute('category_add');
        }
        $itemObject = 'App\\Entity\\' . $class;
        $item = new $itemObject;
       
        $form = $this->createForm( 'App\\Form\\' . $class . 'Type', $item);
        $form->handleRequest($request);
     
        if ($form->isSubmitted() && $form->isValid()) {

            $em = $this->doctrine->getManager();
            if ($class === 'Size') {
                $size = $form->getData()->getSize();
                $item->setSize($size);
            } else {
            $name = $form->getData()->getName();
            $item->setName($name);
            }
          
            $em->persist($item);
            $em->flush();
            $this->addFlash(
               'notice',
               'Item added'
            );
            return $this->redirectToRoute('settings', [
                'page' => 1,
                'class' => $class
            ]);
        }
        return $this->render('admin/add-item.html.twig', [
            'classItem' => $class,
            'form' => $form->createView()
        ]);
    }

    /** 
     * Removes brand, color, size
    */ 
    #[Route('/remove-item/{id}/{class}', name: 'remove_item')]
    public function removeItem($id, $class)
    {
        $em = $this->doctrine->getManager();
        $item = $this->doctrine->getRepository('App\\Entity\\' . $class)->find($id);
        $em->remove($item);
        $em->flush();

        switch ($class) {
            case 'User':
                $this->addFlash(
                   'notice',
                   'Customer has been removed.'
                );
                return $this->redirectToRoute('customers');
            default: 
                return $this->redirectToRoute('/admin');
        }
        return $this->redirectToRoute('settings', [
            'page' => 1,
            'class' => $class
        ]);
    }

    private function getStats()
    {
        // 3 queries :) must be improved
        $usersQty = $this->doctrine->getRepository(User::class)->countCustomers();
        $productsQty = $this->doctrine->getRepository(Product::class)->countProducts();
        $stockQty = $this->doctrine->getRepository(Stock::class)->countStock();
        return [
            'usersQty' => $usersQty,
            'productsQty' => $productsQty,
            'stockQty' => $stockQty
        ];
    }
}
