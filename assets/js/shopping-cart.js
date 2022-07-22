export default class ShoppingCart {

    /** This scripts adds items to shopping cart, but 
     * is stored in localStorage only not in SessionStorage
     */
    constructor() {
        // It will storage all shopping cart items here
        this.cartItems = [];
        this.cartItems = this.getDataFromStorage();
        this.totalPrice = this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        if (this.cartItems.length > 0) {
            let totalPrice = 0;
            this.cartItems.forEach( item => {
                totalPrice += item.qty * item.price;
            })
            return totalPrice;
        }
        return 0;
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
    setTotalPriceInStorage() {
        localStorage.setItem('totalPrice', totalPrice())
    }
    totalPrice() {

    }
    addItemToCart(product) {
        // check if item is in the array already
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
    }
    removeItemFromCart(id) {
        let data = this.getDataFromStorage();
        console.log(id);
        const searchObjectIdx = data.findIndex( item => { 
            // id must be parsed to Int, otherwise doesn't work
            return item.id == parseInt(id);
         } );
        data.splice(searchObjectIdx,1);
        localStorage.setItem('cartItems', JSON.stringify(data));

    }
    removeAllItems() {
        this.cartItems = [];
        localStorage.setItem('cartItems', []);
    }
}
