<?php

namespace App\Service;

use App\Entity\Order;
use App\Repository\OrderRepository;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
class CartSession 
{
    private $requestStack;
    private $cartRepo;

    const CART_KEY_NAME = 'cart_id';
    public function __construct(RequestStack $requestStack, OrderRepository $orderRepo)
    {
        $this->requestStack = $requestStack;
        $this->cartRepo = $orderRepo;
    }

    /** 
     * Get the cart in the session
    */
    
    public function getCart(): ?Order
    {
        return $this->cartRepo->findOneBy([
            'id' => $this->getCartId(),
            'status' => Order::STATUS_CART
        ]);
    }
    
    /**
     * Set the cart
     */
    public function setCart(Order $cart): void
    {
        $this->getSession()->set(self::CART_KEY_NAME, $cart->getId());
    }

    public function getCartId(): ?int
    {
        return $this->getSession()->get(self::CART_KEY_NAME);
    }
    private function getSession(): SessionInterface
    {
        return $this->requestStack->getSession();
    }
}
