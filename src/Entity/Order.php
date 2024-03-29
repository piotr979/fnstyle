<?php

/* 
* Shopping cart management based on
* https://dev.to/qferrer/creating-cart-entities-building-a-shopping-cart-with-symfony-h90
*/
namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
#[ORM\Table(name: '`order`')]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\OneToMany(mappedBy: 'orderRef', targetEntity: OrderItem::class, cascade: ["persist", "remove"], orphanRemoval: true)]
    private $items;

    #[ORM\Column(type: 'string', length: 255)]
    private $status = self::STATUS_CART;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[ORM\Column(type: 'datetime')]
    private $updatedAt;

    /** 
     * An order in progress, not placed.
     */
    const STATUS_CART = 'cart';
    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, OrderItem>
     */
    public function getItems(): Collection
    {
        return $this->items;
    }
    public function removeItems(): self
    {
        foreach ($this->getItems() as $item) {
            $this->removeItem($item);
        }
        return $this;
    }

    public function addItem(OrderItem $item): self
    {
        foreach ($this->getItems() as $existingItem ) {
            if ($existingItem->equals($item)) {
                $existingItem->setQuantity(
                    $existingItem->getQuantity() + $item->getQuantity()
                );
                return $this;
            }
        }
        // if (!$this->items->contains($item)) {
        //     $this->items[] = $item;
        //     $item->setOrderRef($this);
        // }
            $this->items[] = $item;
            $item->setOrderRef($this);
        return $this;
    }

    public function removeItem(OrderItem $item): self
    {
        if ($this->items->removeElement($item)) {
            // set the owning side to null (unless already changed)
            if ($item->getOrderRef() === $this) {
                $item->setOrderRef(null);
            }
        }

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
    public function getTotal(): float
    {
        $total = 0;
        foreach ($this->getItems() as $item) {
            $total += $item->getTotal();
        }
        return $total;
    }
}
