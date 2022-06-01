<?php

namespace App\Form;

use App\Entity\Color;
use App\Entity\Size;
use App\Entity\Stock;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class StockType extends AbstractType
{
    private ManagerRegistry $doctrine;
    private FilesystemAdapter $cache;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
        $this->cache = new FilesystemAdapter();
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
      //  $choices = $this->doctrine->getRepository(Color::class)->getChoices();
      
        $builder
            ->add('qty', NumberType::class)
            ->add('color', EntityType::class, [
                'class' => Color::class,
                'attr' => [
                    'class' => 'color-select'
                ]
               
            ])
            ->add('size', EntityType::class, [
                'class' => Size::class,
                'attr' => [
                    'class' => 'size-select'
                ]
            ]
            )
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Stock::class
        ]);
    }
}
