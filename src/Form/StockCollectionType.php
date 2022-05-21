<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\Stock;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Form\StockType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class StockCollectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('stocks', CollectionType::class, [
            'entry_type' => StockType::class,
            'allow_add' => true,
            'allow_delete' => true,
            'prototype' => true,
            'by_reference' => false,
            'entry_options' => [
                'color_choices' => $options['color_choices'],
                'size_choices' => $options['size_choices']
            ]
        ])
     ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
            'color_choices' => [],
            'size_choices' => []
            // Configure your form options here
        ]);
    }
}
