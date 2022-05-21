<?php

namespace App\Entity;

use App\Repository\StockRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StockRepository::class)]
class Stock
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $qty;

    #[ORM\ManyToOne(targetEntity: Product::class, inversedBy: 'stocks')]
    private $product;

    #[ORM\ManyToOne(targetEntity: Color::class, inversedBy: 'stocks') ]
    private $color;

    #[ORM\ManyToOne(targetEntity: Size::class, inversedBy: 'stocks')]
    private $size;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQty(): ?int
    {
        return $this->qty;
    }

    public function setQty(?int $qty): self
    {
        $this->qty = $qty;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }

    /**
     * @return Color
     */
    public function getColor(): ?Color
    {
        return $this->color;
    }

   public function setColor(?Color $color): self
   {
       $this->color = $color;
       return $this;
   }

    /**
     * @return Size
     */
    public function getSize(): ?Size
    {
        return $this->size;
    }

    public function setSize(?Size $size): self
   {
       $this->size = $size;
       return $this;
   }
  
}
