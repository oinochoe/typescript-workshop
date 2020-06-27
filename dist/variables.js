function outer() {
    if (true) {
        const score = 100;
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}
outer();
//# sourceMappingURL=variables.js.map