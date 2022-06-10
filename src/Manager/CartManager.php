<?php 

namespace App\Manager;

use App\Entity\Order;
use App\Factory\OrderFactory;
use App\Service\CartSession;
use Doctrine\Persistence\ManagerRegistry;

class CartManager
{
    private $cartSession;
    private $cartFactory;
    private $entityManager;

    public function __construct(
        CartSession $cartSession, 
        OrderFactory $orderFactory,
        ManagerRegistry $doctrine)
    {
        $this->cartSession = $cartSession;
        $this->cartFactory = $orderFactory;
        $this->entityManager = $doctrine->getManager();
    }

    /**
     * Get the cart
     * 
     * @return Order
     */
     public function getCurrentCart(): Order 
     {
        $cart = $this->cartSession->getCart();
        
        if (!$cart) {
            $cart = $this->cartFactory->createOrder();
        }
        return $cart;
     }
    public function saveCart(Order $cart): void
    {
        $this->entityManager->persist($cart);
        $this->entityManager->flush();
        $this->cartSession->setCart($cart);
    }
}
