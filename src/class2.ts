interface Person {
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}
/**
 * 일반적인 클래스로 interface 구현한 방법 아래에서 추상 클래스로 한번 더 다르게 구현해봅시다.
class KoreanProgmrammer implements Person, Programmer {
    constructor(public name: string) {}

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '....';
    }

    loveKimchi() {
        console.log('love ~ kimchi');
    }
}

const jay = new KoreanProgmrammer('jay'); */

abstract class Korean implements Person {
    public abstract jumin: number;

    constructor(public name: string) {}

    say(message: string): void {
        console.log(message);
    }

    abstract loveKimchi(): void;
}

/**
 * 추상클래스로 구현
 */
class KoreanProgmrammer extends Korean implements Programmer {
    constructor(public name: string, public jumin: number) {
        super(name);
    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '....';
    }

    loveKimchi(): void {
        console.log('love ~ kimchi');
    }
}

const jay = new KoreanProgmrammer('jay', 2222);

// 추상클래스는 구현하지 않은 상태로는 new 키워드로 정의하는 인스턴스로 만들 수 없다.
// const jay2 = new Korean('jay', 2222);
