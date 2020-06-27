interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    // public user: User;
    // private store: object;

    constructor(public user: User, private store: object = {}) {
        // this.user = user;
        //this.store = {};
    }

    public put(id: string, product: Product) {
        // this.user.name
        this.store[id] = product;
    }

    public get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cart2 = new PromotionCart({ name: 'john' }, { product: { 드래곤: '드래곤' } });
cart2.addPromotion();
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' }, { product: { 양파: '양파2' } });
console.log(cart2, cartJohn, cartJay);
