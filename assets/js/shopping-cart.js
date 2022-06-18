export default class ShoppingCart {
    constructor() {
        console.log('testuj');
        // It will storage all shopping cart items here
        this.cartItems = [];
       
       this.cartItems = this.getDataFromStorage();
        console.log("The cart" + this.cartItems);
    }
    getDataFromStorage() {
        if (localStorage.getItem('cartItems') === null
            || localStorage.getItem('cartItems').length === 0) {
            return [];
        } else {
       return JSON.parse(localStorage.getItem('cartItems'));
        }
    }
    setDataInStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
    addItemToCart(product) {
        console.log(this.cartItems);
        // check if item is already in the array
        const searchObjectIdx = this.cartItems.findIndex((item) => {
          
            return item.id == product.id;
         } )
        if (searchObjectIdx === - 1) {
            this.cartItems.push(product);
            this.setDataInStorage()
        } else {
            this.cartItems[searchObjectIdx].qty += 1;
            this.setDataInStorage()
        }
        console.log(searchObjectIdx)
    
    }
    removeAllItems() {
        this.cartItems = [];
        localStorage.setItem('cartItems', []);
    }
}
