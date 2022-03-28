<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    #[Route('/catalog', name: 'catalog')]
    public function index(): Response
    {
        return $this->render('admin/catalog.html.twig');
    }

    #[Route('/edit-item/{id}', name: 'edit-item')]
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

    #[Route('/settings', name: 'settings')]
    public function settings(): Response
    {
        return $this->render('admin/settings.html.twig');
    }
}
