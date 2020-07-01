function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: 'jay' }, { do() { } });
console.log(u.do, u.name);
//# sourceMappingURL=intersection.js.map