interface Props {
    name: string;
    [key: string]: string;
}

let keys: keyof Props;

interface User3 {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User3;
keysOfUser = 'age';

let helloMethod: User3['hello'];
helloMethod = function (msg: string) {};
// helloMethod = "d"

// const p: Props = {
//     name: 'hello',
//     a: 'd',
//     b: 'c',
//     c: '3',
//     0: 'd',
//     1: 'b',
// };

// p[1];
// p.name;
// p.d;
