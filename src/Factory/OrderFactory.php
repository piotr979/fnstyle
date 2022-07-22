<?php

namespace App\Factory;

use App\Entity\Product;
use App\Entity\Order;
use App\Entity\OrderItem;

class OrderFactory {

    public function createOrder(): Order
    {
        $order = new Order();
        $order->setStatus(Order::STATUS_CART)
              ->setCreatedAt(new \DateTime())
              ->setUpdatedAt(new \DateTime());
        return $order;
    }
    
    public function createOrderItem(Product $product): OrderItem
    {
        $orderItem = new OrderItem();
        $orderItem->setProduct($product);
        $orderItem->setQuantity(1);
        return $orderItem;
    }

}
