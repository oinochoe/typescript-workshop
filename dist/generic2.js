class D {
    add(v) {
        throw new Error('Method not implemented.');
    }
    get() {
        throw new Error('Method not implemented.');
    }
}
class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}
const cart1 = {
    getItem() {
        return {
            m: 'hi',
        };
    },
};
console.log(cart1.getItem().m);
//# sourceMappingURL=generic2.js.map