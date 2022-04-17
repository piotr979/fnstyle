<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Category;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
            findAllWithParentPaginated($page, $class);
         
    

      
        return $this->render('admin/settings.html.twig', [
            'items' => $allItems,
            'classItem' => $class,
            'page' => $page
        ]);
    }
    #[Route('/category-save/{id}/{name}', name: 'category_save')]
    public function saveCategory(int $id, string $name, ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $category = $doctrine->getRepository(Category::class)->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id' . $id
            );
        }
        $category->setName($name);
        $em->flush();
        return $this->redirectToRoute('settings');
    }
    #[Route('/category-add', name: 'category_add')]
    public function addCategory()
    {
        return $this->render('admin/add-category.html.twig');
    }
}
