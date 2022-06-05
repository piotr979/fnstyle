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
            new TwigFilter('addUploadPath', [$this, 'addUploadPath'])
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
    public function addUploadPath(array $data)
    {
        // TODO:
        // same as FileHandler function to add path to uploaded file
    }
}
