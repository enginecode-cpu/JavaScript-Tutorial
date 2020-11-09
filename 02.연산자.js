// 대입 연산자
let a1 = 1;
console.log(a1);

let a2 = 3;
a2 += 2
console.log(a2);

let a3 = 4;
a3  -= 1
console.log(a3);

let a4 = 5;
a4 /= 2;
console.log(a4);

let a5 = 6;
a5 *= 8
console.log(a5);

console.log('-----');

// 산술 연산자
let b1 = 1 + 2 * 6;
console.log(b1);

let b2 = 13 % 2;
console.log(b2);

let b3 = 12 / 5;
console.log(b3);

let val1 = 4;
console.log(val1++);
console.log(val1);

let val2 = 10;
console.log(++val2);

console.log('-----');

// 논리 연산자
// NOT
console.log(!true);
console.log(!false);

console.log('-----');

// AND
console.log(true && true);
console.log(true && false);
console.log(false && false);

// OR
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log('-----');

// 비교 연산자
console.log(2 === 2);
console.log(2 === 3);

console.log(1 < 2);
console.log(1 <= 2);
console.log(3 < 2);
console.log(3 <= 2);

console.log();

console.log(3 > 2);
console.log(3 >= 2);
console.log(2 > 10);
console.log(2 >= 10);

console.log('-----');

console.log(2 !== 2);
console.log(2 !== 5);

console.log('-----');

const text1 = 'Hello';
const text2 = 'javascript';

console.log(text1 + ' ' + text2);