// 배열
const array = [1, 2, 3, 4, 5];
console.log(array);

console.log(array[1]);
console.log(array[4]);

console.log('-----');

const array2 = [1, 2, 'javascript', {name : '흰둥이', sound : '멍멍'}];
console.log(array2);

console.log('-----');

const array3 = [
    {name : '흰둥이'},
    {name : '미쯔'},
];

console.log(array3[0]);
console.log(array3[1]);

// Stack
// push : 맨 뒤에 원소 추가하기
array3.push({name : '검둥이'});
console.log(array3);

// pop : 맨 뒤에 원소 빼기
const array4 = [1, 2, 3, 4, 5, 6, 7, 10];
array4.pop(); // 10 삭제
console.log(array4);

// Queue
// unshift : 맨 앞에 원소를 추가
array4.unshift(100);
console.log(array4);

// shift : 맨 앞에 원소를 제거
array4.shift();
console.log(array4); // 100 제거

// length : 배열의 크기
array5 = [1, 2, 3, 4, 5, 6, 7, 10];
console.log(array5.length);