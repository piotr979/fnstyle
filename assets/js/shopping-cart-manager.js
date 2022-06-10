import ShoppingCart from './shopping-cart';

    let colorSelect = document.getElementById('color-select');
	let sizeSelect = document.getElementById('size-select');
    let shoppingCart = new ShoppingCart();

    // creates just "p" element
    const addParagraph = (text, listItem, classesArray) => {
        let item = document.createElement('p');
        item.innerText = text;
        classesArray.forEach( className => {
            item.classList.add(className);
        })
        listItem.appendChild(item);
    }

    // creates "p" element and then inside of it "small" one
    const addSmallText = (text, listItem, classes) => {
        let parentItem = document.createElement('p');
        let smallItem = document.createElement('small');
        smallItem.innerText = text;
        parentItem.classList.add(classes);
        parentItem.appendChild(smallItem);
        listItem.appendChild(parentItem);
    }
    const updateNumberByCartButton = () => {
    const cartAnchor = document.getElementById('cart-anchor');
    cartAnchor.innerText = `(${shoppingCart.cartItems.length})`;
    }
    const populateList = (shoppingUl) => {
               // shoppingUl is HTML collection
        // shoppingCart is JS array of objects
    while ( shoppingUl.firstChild) {
        shoppingUl.removeChild(shoppingUl.firstChild);
        
    }
  
    //populate list again
    shoppingCart.cartItems.forEach( (shoppingItem) =>  {
        const li = document.createElement("li");
        addParagraph(shoppingItem.brand, li, ['fw-bold', 'mb-0']);
        addParagraph(shoppingItem.name, li, ['mb-1']);
        addSmallText('Quantity: ' + shoppingItem.qty, li, 'mb-0');
        addSmallText('Color: ' + shoppingItem.color, li, 'mb-0');
        addSmallText('Size: ' + shoppingItem.size, li, 'mb-0');
        
        const hrLine = document.createElement('hr');
        li.appendChild(hrLine);

        shoppingUl.appendChild(li);
    });
    }
document.addEventListener('DOMContentLoaded', function() { 
    const shoppingUl = document.getElementById('shopping-list-ul');
    populateList(shoppingUl);
    const addToCartBtn = document.getElementById('add-to-cart-button');
    updateNumberByCartButton();
    addToCartBtn.addEventListener('click', (e) => {
	  
    const productBrand = addToCartBtn.dataset.productname;
    const productModel = addToCartBtn.dataset.productmodel;
    const color = colorSelect.value;
    const size = sizeSelect.value;
   
    shoppingCart.addItemToCart(
        {
            qty: 1,
            brand: productBrand,
            name: productModel,
            color: color,
            size: size
        }
    );
   
    populateList(shoppingUl);
 

    })
});