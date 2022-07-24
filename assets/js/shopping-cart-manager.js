import ShoppingCart from './shopping-cart';

let colorSelect = document.getElementById('color-select');
let sizeSelect = document.getElementById('size-select');

let productPriceItem = document.getElementById('product-price');
let totalPriceInCart = document.getElementById('total-price');
// displays final price for products in modal shipping cart
let shoppingCart = new ShoppingCart();

// just creates "p" element
const addParagraph = (text, listItem, classesArray) => {
    let item = document.createElement('p');
    item.innerText = text;
    classesArray.forEach(className => {
        item.classList.add(className);
    })
    listItem.appendChild(item);
}

// creates "p" element and then inside of it a "small" one
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
    if (shoppingUl != null) {
        while (shoppingUl.firstChild) {
            shoppingUl.removeChild(shoppingUl.firstChild);
            }
        }

    //populate list again
    shoppingCart.cartItems.forEach((shoppingItem) => {
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

    // Calculates and displays total price for all products in the bag
    totalPriceInCart.innerText = shoppingCart.calculateTotalPrice().toFixed(2);
}
document.addEventListener('DOMContentLoaded', function () {
    const shoppingUl = document.getElementById('shopping-list-ul');
   
    populateList(shoppingUl);
    const addToCartBtn = document.getElementById('add-to-cart-button');
    const deleteConfirmButtons = document.querySelectorAll('.delete-confirm-button');
    updateNumberByCartButton();

    if (addToCartBtn != null) {
        addToCartBtn.addEventListener('click', (e) => {
            const productId = addToCartBtn.dataset.id;
            const productBrand = addToCartBtn.dataset.productname;
            const productModel = addToCartBtn.dataset.productmodel;
            const productPrice = productPriceItem.dataset.price;
            const qty = parseInt(document.getElementById('amount-input').value);
            const color = colorSelect.value;
            const size = sizeSelect.value;

            shoppingCart.addItemToCart({
                id: productId,
                qty: qty,
                brand: productBrand,
                name: productModel,
                color: color,
                size: size,
                price: productPrice
            });

            populateList(shoppingUl);
            
            // changes button text for a second when new item is added
            // its' asynchronous therefore "Added to cart" will be displayed first.
            setInterval( () => {
                console.log("test");
                buttonSwitchWithColors(
                    addToCartBtn,
                    'Add to cart',
                    'black',
                    'white'
                    );

            }, 2400);
            addToCartBtn.innerText = "Added to cart!"
            buttonSwitchWithColors(
                addToCartBtn,
                'Added to cart!',
                'white',
                'black'
                );
            // button "animate" ends here

            updateNumberByCartButton();
            let response = fetch("/../checkout", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    data: shoppingCart.cartItems
                })
            }).then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    return response.text()
                }
            }).then((response) => {
                console.log(response);
            });
        })
    }

    // When the delete button is clicked on shopping-bag page 
    // it removes item from localStorage Jsoned array
    // and from session

    if (deleteConfirmButtons != null) {
        deleteConfirmButtons.forEach( button =>  {
            button.addEventListener('click', (ev) => {
               const id = ev.target.dataset.id;
               shoppingCart.removeItemFromCart(id);
               location.href = `/delete-from-bag/${id}`;
        });
    })
    }
});
const buttonSwitchWithColors = (button, text,foregroundColor, backgroundColor) => {
    button.innerText = text;
    button.style.backgroundColor = foregroundColor;
    button.style.color = backgroundColor;
}