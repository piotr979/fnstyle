const routes = require('/public/js/fos_js_routes.json');
import Routing from '/vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);

document.addEventListener('DOMContentLoaded', function() {
    const searchAllForm = document.getElementById('top-search-form');
    const searchProductForm = document.getElementById('search-product__form');
    
    const searchStock = document.getElementById('search-stock');
    const searchUsers = document.getElementById('search-users');


    // search on the main page
    if (searchAllForm != null) {
    searchAllForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchString = document.getElementById('search-string').value;

        var url = Routing.generate('items_filter', {
            'searchText': searchString
        });
       
        location.href = url;
    });
    } 

    // prepares search based on routename and search string
    // search products (when route name = catalog)
    // search stocks (when routename = stock)
    // search customers (when routename = customers)
    if (searchProductForm != null) {
        searchProductForm.addEventListener('submit', (e) => {
          
            e.preventDefault();
         
            const searchString = document.getElementById('search-product__input').value;
            console.log(searchString);
            var url = Routing.generate(
                searchProductForm.dataset.routename, {
                'searchString': searchString
            })

            location.href = url;
        });

   
    }
})