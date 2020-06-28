class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgmrammer extends Korean {
    constructor(name, jumin) {
        super(name);
        this.name = name;
        this.jumin = jumin;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + '....';
    }
    loveKimchi() {
        console.log('love ~ kimchi');
    }
}
const jay = new KoreanProgmrammer('jay', 2222);
//# sourceMappingURL=class2.js.map