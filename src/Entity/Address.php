<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $addressLine1;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $addressLine2;

    #[ORM\Column(type: 'string', length: 16)]
    private $zipCode;

    #[ORM\Column(type: 'string', length: 255)]
    private $cityName;

    #[ORM\Column(type: 'string', length: 48, nullable: true)]
    private $phoneNumber;

    #[ORM\OneToMany(mappedBy: 'address', targetEntity: User::class)]
    private $User;

    #[ORM\OneToMany(mappedBy: 'address', targetEntity: User::class)]
    private $users;

    public function __construct()
    {
        $this->User = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddressLine1(): ?string
    {
        return $this->addressLine1;
    }

    public function setAddressLine1(string $addressLine1): self
    {
        $this->addressLine1 = $addressLine1;

        return $this;
    }

    public function getAddressLine2(): ?string
    {
        return $this->addressLine2;
    }

    public function setAddressLine2(string $addressLine2): self
    {
        $this->addressLine2 = $addressLine2;

        return $this;
    }

    public function getZipCode(): ?string
    {
        return $this->zipCode;
    }

    public function setZipCode(string $zipCode): self
    {
        $this->zipCode = $zipCode;

        return $this;
    }

    public function getCityName(): ?string
    {
        return $this->cityName;
    }

    public function setCityName(string $cityName): self
    {
        $this->cityName = $cityName;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUser(): Collection
    {
        return $this->User;
    }

    public function addUser(User $User): self
    {
        if (!$this->User->contains($User)) {
            $this->User[] = $User;
            $User->setAddress($this);
        }

        return $this;
    }

    public function removeUser(User $User): self
    {
        if ($this->User->removeElement($User)) {
            // set the owning side to null (unless already changed)
            if ($User->getAddress() === $this) {
                $User->setAddress(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }
}
