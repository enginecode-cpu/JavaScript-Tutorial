// Stack
// push : 맨 뒤에 원소 추가하기
const array = [
  {name : '흰둥이'},
  {name : '미쯔'},
];

array.push({name : '검둥이'});
console.log(array);

// pop : 맨 뒤에 원소 빼기
const array2 = [1, 2, 3, 4, 5, 6, 7, 10];
array2.pop(); // 10 삭제
console.log(array2);

// Queue
// shift : 맨 앞의 원소를 빼기
const numbers = [11, 12, 13, 14, 15, 30, 20, 10];
const value = numbers.shift();
console.log(value);
console.log(numbers);

console.log('-----');

// unshift : 맨 앞에 원소를 집어넣기
const numbers2 = [100, 21, 40, 32, 50];
numbers2.unshift(90);
console.log(numbers2);