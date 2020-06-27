let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 3.3;
stringValue = 'hello';
stringValue = `
hello
${1 + 1} hi`;

booleanValue = true;
undefinedValue = null;
numValue = null;
numValue = undefined;
anyValue = 1;
anyValue = '#';
anyValue = null;
anyValue = {};

objValue = { name: 'jay' };
objValue = {};
objValue = new String(33);

symbolValue = Symbol();

let nameList: string[];

nameList = ['1', '3'];
// nameList.push(333); // 문자열이 아님

let user1: { name: string; score: number };
user1 = {
    name: 'jay',
    score: 30,
};
let user2: { name: string; score: number };

let tuple2: [number, string];
let tuple3: [number, string, string, string];
tuple2 = [1, '2'];
tuple3 = [1, '2', '3', '4'];
