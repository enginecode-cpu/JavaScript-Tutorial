// 객체
const student = {
    name : '김철수',
    age : 5,
    'space is possible' : true
};

console.log(student);
console.log(student.name);
console.log(student.age);

console.log('-----');

const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const captinAmerica = {
    name : '스티븐 로져스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

console.log(ironMan);
console.log(captinAmerica);

console.log('-----');

// 비구조 할당(객체구조 분해)
const { alias, name, actor } = ironMan;
console.log(`${alias} | ${name} | ${actor}`);

console.log('-----');

// 객체 안에 함수 넣기
const dog = {
    name : '흰둥이',
    sound : '왈왈',
    say : function say() {
        console.log(this.sound);
    }
};

dog.say();

console.log('-----');

const dog2 = {
    name : '흰둥이',
    sound : '왈왈',
    say() {
        console.log(this.sound);
    }
};

dog2.say();

console.log('-----');

const cat = {
    name : '야옹이',
    sound : '야옹~'
};

cat.say = dog.say;
cat.say();

console.log('-----');