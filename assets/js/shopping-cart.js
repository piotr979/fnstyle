export default class ShoppingCart {
    constructor() {
        console.log('testuj');
        // It will storage all shopping cart items here
        this.cartItems = [];
       
       this.cartItems = this.getDataFromStorage();
        console.log("The cart" + this.cartItems);
    }
    getDataFromStorage() {
        if (localStorage.getItem('cartItems') === null) {
            return [];
        } else {
       return JSON.parse(localStorage.getItem('cartItems'));
        }
    }
    addItemToCart(product) {
        console.log(this.cartItems);
        this.cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
}
