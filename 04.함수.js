// 함수
function add(a, b) {
    return a + b;
}

const sum = add(5, 6);
console.log(sum);

console.log('-----');

// 사칙 연산 함수 만들기
function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b){
    return a % b;
}

const a = 100;
const b = 21;

console.log(add(a, b));
console.log(sub(a, b));
console.log(mul(a, b));
console.log(div(a, b));
console.log(mod(a, b));

console.log('-----');

// 인사하기 함수 만들기
function hello(name) {
    console.log(`Hello ${name}!`)
}

hello('Park');

console.log('-----');

function grade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(grade(100));
console.log(grade(95));
console.log(grade(89));
console.log(grade(83));
console.log(grade(79));
console.log(grade(71));
console.log(grade(69));
console.log(grade(62));
console.log(grade(40));

console.log('-----');

// 화살표 함수
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(1, 7));
 
console.log('-----');

const hello2 = (name) => {
    return `Hello ${name}!`
}
console.log(hello2('Park'));