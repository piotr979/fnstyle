const routes = require('/public/js/fos_js_routes.json');
import Routing from '/vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('top-search-form');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchString = document.getElementById('search-string').value;

        var url = Routing.generate('items_filter', {
            'searchText': searchString
        });
       
        location.href = url;
    });
})