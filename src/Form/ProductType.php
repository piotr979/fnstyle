<?php

namespace App\Form;

use App\Entity\Color;
use App\Entity\Brand;
use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Size;
use App\Form\StockType;
use Doctrine\ORM\EntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Form\AbstractType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    private $doctrine;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $colors = $this->doctrine->getRepository(Color::class)->findAll();

        $builder
             ->add('brand', EntityType::class,[
            'class' => Brand::class,
            'query_builder' => function (EntityRepository $er) {
                return $er->createQueryBuilder('b')
                ->orderBy('b.name');
            },
            'choice_label' => 'name'
            ])
            ->add('model')
            ->add('price')
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('c')
                    ->orderBy('c.name');
                },
                'choice_label' => 'name'
            ])
            ->add('images', FileType::class, [
                'multiple' => true,
                'required' => false,
            ])
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-action'
                ]
             ])
            ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
