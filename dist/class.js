class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
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
//# sourceMappingURL=class.js.map