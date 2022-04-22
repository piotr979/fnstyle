<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Category;
use App\Entity\Color;
use App\Entity\Size;
use App\Form\CategoryFormType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ColorType;

#[Route('admin')]
class AdminController extends AbstractController
{
    // Redirect to catalog
    #[Route('/', name: 'admin')]
    public function admin()
    {
        return $this->redirectToRoute('catalog');
    }
    #[Route('/catalog/{page}/{category}/{sorting}', name: 'catalog',
        defaults: ['sorting' => 'name_desc', 'page' => 1, 'category' => 'all'])]
    public function index(int $page, string $category, string $sorting, ManagerRegistry $doctrine): Response
    {
        $repo = $doctrine->getRepository(Product::class);
        $products = $repo->findAllPaginated(
            $page,
            $category,
            $sorting
        );
        return $this->render('admin/catalog.html.twig', [
            'products' => $products
        ]);
    }

    #[Route('/add-product', name: 'add_product')]
    public function addProduct()
    {
        return $this->render('admin/add-product.html.twig');
    }
    #[Route('/edit-product/{id}', name: 'edit-product')]
    public function editItem($id): Response
    {
        return $this->render('admin/edit-item.html.twig');
    }

    #[Route('/customers', name: 'customers')]
    public function users(): Response
    {
        return $this->render('admin/customers.html.twig');
    }

    #[Route('/edit-customer/{id}', name: 'edit-customer')]
    public function editCustomer($id): Response
    {
        return $this->render('admin/edit-customer.html.twig');
    }

    #[Route('/settings/{page}/{class}', name: 'settings')]
    public function settings(int $page=1, string $class="Category", ManagerRegistry $doctrine): Response
    {
        $allItems = $doctrine->getRepository('App\\Entity\\' . $class)->
            findAllPaginated($page, $class);
        return $this->render('admin/settings.html.twig', [
            'items' => $allItems,
            'classItem' => $class,
            'page' => $page
        ]);
    }
    #[Route('/item-save/{id}/{name}/{class}', name: 'item_save')]
    public function itemCategory(int $id, string $name, string $class, ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
            $item = $doctrine->getRepository('App\\Entity\\' . $class)->find($id);

                if (!$item) {
                    throw $this->createNotFoundException(
                        'Item not found. Id number' . $id
                    );
                }
                switch ($class) {
                    case 'Category': {
                        $item->setName($name);
                        break;
                    }
                    case 'Size': {
                        $item->setSize($name);
                        break;
                    }
                    case 'Brand': {
                        $item->setName($name);
                        break;
                    }
                    case 'Color': {
                        $item->setName($name);
                        break;
                    }
                }
              
                $em->flush();
        return $this->redirectToRoute('settings', [
            'page' => 1,
            'class' => $class
        ]);
    }
    #[Route('/category-add', name: 'category_add')]
    public function addCategory(ManagerRegistry $doctrine, Request $request)
    {
        $category = new Category();
        $categoryForm = $this->createForm(CategoryFormType::class, $category);
        $categoryForm->handleRequest($request);
        if ($categoryForm->isSubmitted() && $categoryForm->isValid()) {
            /* need to insert between existing data */
            $data = $categoryForm->getData();
           $doctrine->getRepository(Category::class)->addNewCategoryIntoExisting($data->getParentCategory(), $data->getName());
            $this->addFlash('notice','New category inserted.');
            return $this->redirectToRoute('settings');
        }
        return $this->render('admin/add-category.html.twig', [
            'categoryForm' => $categoryForm->createView()
        ]);
    }
    #[Route('/item-add/{class}', name: 'item_add')]
    public function itemAdd($class, Request $request, ManagerRegistry $doctrine)
    {
        if ($class == 'Category') {
            return $this->redirectToRoute('category_add');
        }
        $itemObject = 'App\\Entity\\' . $class;
        $item = new $itemObject;
        $form = $this->createForm( 'App\\Form\\' . $class . 'Type', $item);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $doctrine->getManager();

            /* It's kind of generic "getName" call, common for Brand,Color,Size */
            $name = $form->getData()->getName();
            $item->setName($name);
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
    #[Route('/add-color', name: 'add_color')]
    public function addColor()
    {
        $color = new Color();
        $form = $this->createForm(ColorType::class, $color);
        return $this->render('admin/add-item.html.twig',[
            'classItem' => 'item',
            'form' => $form->createView()
        ]);
    }
    #[Route('/remove-item/{id}/{class}', name: 'remove_item')]
    public function removeItem($id, $class,  ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $item = $doctrine->getRepository('App\\Entity\\' . $class)->find($id);
        $em->remove($item);
        $em->flush();
        return $this->redirectToRoute('settings', [
            'page' => 1,
            'class' => $class
        ]);
    }
}
