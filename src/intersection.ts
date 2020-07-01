interface User {
    name: string;
}

interface Action {
    do(): void;
}

// & 로 표현하는 것을 인터섹션이라고 함
function createUserAction(c: User, a: Action): User & Action {
    // user와 action 타입을 합침..
    return { ...c, ...a };
}

const u = createUserAction({ name: 'jay' }, { do() {} });

// 함수 오버로딩 사용으로 다음과같이 강타입 고정 가능
function compare(x: string, y: string);
function compare(x: number, y: number);
// | 로 표현하는 것을 Union 타입이라고 함
function compare(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}

const v = compare(1, 1);
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));

function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    if (isAction(v)) {
        v.do();
    } else {
        console.log(v.name);
    }
}
