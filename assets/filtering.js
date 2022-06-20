const routes = require('/public/js/fos_js_routes.json');
import Routing from '/vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);


  // collect data 
  document.addEventListener('DOMContentLoaded', function() {
       
    const priceNote = document.getElementById('price-note');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const stripNodeList = ( nodeList => {
        let tempList = [];
            [...nodeList].forEach( item => {
            tempList.push(  String(item.value));
        })
        return tempList;
    });
    
    applyFiltersBtn.addEventListener('click', function() {

        const sizeInput = document.querySelectorAll('.size-input:checked');
        const brandInput = document.querySelectorAll('.brands:checked');
        const priceFromInput = document.getElementById('price-from');
        const priceToInput = document.getElementById('price-to');
        const priceFrom = parseInt(priceFromInput.value);
        const priceTo = parseInt(priceToInput.value);

        if (priceFrom > priceTo) {
            priceNote.innerText = 'Check price';
            return;
        };
       
        let sizeList = stripNodeList(sizeInput);
        let brandList = stripNodeList(brandInput);
       

    // create path in JS without FOSjsBUndle
    // by replacing values in URL variables
   
      
        
   
    var url = Routing.generate('items_filter', {
        'sizes': sizeList.length > 0 ? sizeList.toString() : 'noSizes',
        'brands': brandList.length > 0 ? brandList.toString() : 'noBrands',
        'priceFrom': priceFromInput.value != '' ? priceFromInput.value : '0',
        'priceTo': priceToInput.value != '' ? priceToInput.value : '99999',
        'category': 'noCat'});
    
     

        // redirect with built URL address
        location.href = url;
    })
})