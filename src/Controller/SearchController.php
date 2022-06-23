<?php

namespace App\Controller;

use App\Form\SearchProductType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;

class SearchController extends AbstractController
{
    #[Route('search-product', name: 'search_product')]
    public function searchProduct(RequestStack $requestStack)
    {
        $searchForm = $this->createForm(SearchProductType::class);
        $request = $requestStack->getParentRequest();
        $searchForm->handleRequest($request);
      
        if ($searchForm->isSubmitted() && $searchForm->isValid()) {
            dump($searchForm->getData());
        }
        return $this->render('components/search-input.html.twig', [
            'searchForm' => $searchForm->createView()
            ]);
    }
}
