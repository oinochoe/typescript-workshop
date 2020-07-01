interface User {
    name: string;
}

interface Action {
    do(): void;
}

// & 로 표현하는 것을 인터섹션이라고 함
function createUserAction(u: User, a: Action): User & Action {
    // user와 action 타입을 합침..
    return { ...u, ...a };
}

const u = createUserAction({ name: 'jay' }, { do() {} });
console.log(u.do, u.name);

// | 로 표현하는 것을 Union 타입이라고 함
function compare(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
}
