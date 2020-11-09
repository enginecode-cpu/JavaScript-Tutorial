// length : 배열의 크기
const array = [1, 2, 3, 4, 5, 6, 7, 10];
console.log(array.length);

// 배열 내장 함수 : forEach

const marvel = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지',
    '스파이더맨',
    '헐크',
    '앤트맨'
];

for (let m of marvel){
    console.log(m);
}

console.log('-----');

function print(hero){
    console.log(hero);
}

marvel.forEach(print);

console.log('-----');

marvel.forEach(hero => {
    console.log(hero);
});

// map
// 배열 안에 원소의 값을 제곱해서 배열에 넣기
// 1번째 방법
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squred1 = [];
for (let i = 0; i < num.length; i++) {
    squred1.push(num[i] ** 2);
}
console.log(squred1);

console.log('-----');

// 2번째 방법
const squred2 = [];
for (let n of num) {
    squred2.push(n ** 2);
}
console.log(squred2)

// 3번째 방법
const squre = n => n ** 2;
const squred3 = num.map(squre);
console.log(squred3);

console.log('-----');

const items = [
    {
        id : 1,
        text : 'hello'
    },
    {
        id : 2,
        text : 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);

console.log('-----');

// indexOf
const marvel2 = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지',
    '스파이더맨',
    '헐크',
    '앤트맨'
];

console.log(marvel2.indexOf('앤트맨'));

console.log('-----');

// findIndex
const todos = [
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true
    },
    {
        id : 4,
        text : '배열 내장 함수 배우기',
        done : false
    },
];
console.log(todos.findIndex(todo => todo.id === 3));
console.log(todos.find(todo => todo.id === 3));
console.log(todos.find(todo => todo.done === false));

console.log('-----');

// filter
console.log(todos.filter(todo => todo.done));
console.log(todos.filter(todo => !todo.done));

console.log('-----');

// splice
const numbers = [10, 20, 30, 40, 50];
const index = numbers.indexOf(30);

const spliced = numbers.splice(index, 2);

console.log(spliced); // [ 30, 40 ]
console.log(numbers); // [ 10, 20, 50 ]

console.log('-----');

// slice
const numbers2 = [11, 12, 13, 14, 15];
const index2 = numbers2.indexOf(30);

const sliced = numbers2.slice(0, 2);
console.log(sliced);
console.log(numbers2);

console.log('-----');

// concat
// 배열과 배열을 합치기
const arr = [1, 2, 3];
const arr2 = [5, 6, 7];

const concated = arr.concat(arr2);
console.log(concated);

const concated2 = [...arr, ...arr2];
console.log(concated2);

console.log('-----');

// join
// 배열 안에 있는 것들을 문자열로 합쳐주는 함수
const arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3.join());
console.log(arr3.join(''));
console.log(arr3.join(', '));

console.log('-----');

// reduce
// 배열 안에 있는 모든 갓을 사용하여 어떤 값을
// 연산해야할 때 쓰는 함수
const numbers6 = [1, 2, 3, 4, 5];

const sum = numbers6.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

console.log('-----');

const avg = numbers6.reduce((acc, cur, index, array) => {
    if (index === array.length - 1) {
        return (acc + cur) / arr.length;
    }
    return acc + cur;
}, 0);

console.log(avg);

console.log('-----');

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur] += 1;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {})

console.log(counts);
console.log('-----');