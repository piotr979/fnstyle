<?php 

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/*
** Reduces no of arguments for select html element
*/

class ShopExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('reducer', [$this, 'reduceArray']),
        ];
    }
    public function reduceArray(array $data, string $key)
    {
        $items = [];
        foreach ($data as $item) {
        $items[] = $item[$key];
        }
        
        return array_unique($items);
    }
}
