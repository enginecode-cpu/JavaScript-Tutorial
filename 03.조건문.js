// 조건문
const a = 5;

if (a + 1 === 6) {
    console.log('a + 1 = 6');
} else {
    console.log('그렇지 않다.');
}

console.log('-----');

const b = 5;

if (b + 2 === 6) {
    console.log('b + 2 = 6');
} else {
    console.log('그렇지 않다.');
}

console.log('-----');

// 블록 안의 값과 밖의 값은 다르다.
const c = 1;

if (c + 1 === 2){
    const c = 2;
    console.log('if문 안의 c 값은 ' + c);
}
console.log('if문 밖의 c 값은 ' + c);

console.log('-----');

const d = 100;
{
    const d = 200;
    console.log('블록 안의 d 값은 ' + d);
}
console.log('블록 밖의 d 값은 ' + d);

console.log('-----');

// switch, case
const lang = 'python';

switch (lang) { 
    case 'cpp':
        console.log('C++');
        break;
    case 'java':
        console.log('JAVA');
        break
    case 'python':
        console.log('PYTHON');
        break;
    default:
        console.log('모르겠음...');
}

console.log('-----');

const lang2 = 'golang';

switch (lang2) { 
    case 'cpp':
        console.log('C++');
        break;
    case 'java':
        console.log('JAVA');
        break
    case 'python':
        console.log('PYTHON');
        break;
    default:
        console.log('모르겠음...');
}