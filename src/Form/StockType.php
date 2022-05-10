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

class StockType extends AbstractType
{
    private ManagerRegistry $doctrine;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $choices = $this->doctrine->getRepository(Color::class)->getChoices();
     
        $builder
            ->add('qty', NumberType::class)
            ->add('color', ChoiceType::class, [
                'choices' => [
                    'First choice' => 'stock',
                    'Out of Stock' => false,
                ]
               
            ])
            ->add('size', ChoiceType::class, [
                'choices' => [
                    'First choice' => 'stock',
                    'Out of Stock' => false,
                ]
            ]
            )
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Stock::class,
        ]);
    }
}
