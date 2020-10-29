// 템플릿 문자열
const name = 'Park';
console.log(`Hello ${name}!`);

let val = 130;
val++;
console.log(`val : ${val}`);

const bool = true;
console.log(`bool : ${bool}`);

function myname(name) {
    return `My name is ${name}`;
}

console.log(myname('Macbook'));

const add = (a, b) => {
    return `a + b = ${a + b}`;
}

console.log(add(5, 6));