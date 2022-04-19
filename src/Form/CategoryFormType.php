<?php

namespace App\Form;

use App\Entity\Category;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryFormType extends AbstractType
{
    private $doctrine;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class,[
                'required' => true
            ])
            ->add('parentCategory', ChoiceType::class, [
                'label' => 'Parent category',
                'choices' => $this->getParentCategories(),
               
            ])
            ->add('submit',SubmitType::class, [
                'label' => 'Add category',
                'attr' => [
                    'class' => 'btn btn-action'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
    private function getParentCategories()
    {
        $parents = $this->doctrine->getRepository(Category::class)->getAllParents();
     
        $choices = [];
        foreach($parents as $parent) {
            $name = $parent['name'];
            $choices[$name] = $name;
        }
       return $choices;
    }
}
