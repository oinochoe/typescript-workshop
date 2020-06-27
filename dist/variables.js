function outer() {
    if (true) {
        const score = 100;
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
    console.log(score);
}
outer();
//# sourceMappingURL=variables.js.map