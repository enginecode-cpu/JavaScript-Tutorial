// Getter와 Setter 함수
// Getter
const num = {
    a : 50,
    b : 20
};

num.a = 40;
console.log(num);

console.log('-----');

const num2 = {
    a : 50,
    b : 20,
    get sum() {
        console.log('Sum 함수 실행');
        return this.a + this.b;
    }
};

console.log(num2.sum);

console.log('-----');

num2.b = 300;
console.log(num2.sum);

console.log('-----');

// Setter 함수
const apple = {
    _product : '아이패드',
    set product(value) {
        console.log(`상품이 바뀝니다. ${this._product} -> ${value}`);
        this._product = value;
    }
};

console.log(apple._product);
apple.product = 'Macbook Pro';
console.log(apple._product);

console.log('-----');

const apple2 = {
    _product : '아이패드',
    get product() {
        console.log('_product를 조회합니다.');
        return this._product;
    },
    set product(value){
        console.log(`상품이 바뀝니다. ${this._product} -> ${value}`);
        this._product = value;
    }
};

console.log(apple2.product);
apple2.product = 'iMac';
console.log(apple2.product);

console.log('-----');

const num3 = {
    _a : 5,
    _b : 9,
    sum : 14,
    calculate() {
        console.log('계산 실행');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log(`a의 값이 바뀝니다. ${this._a} -> ${value}`);
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log(`b의 값이 바뀝니다. ${this._b} -> ${value}`)
        this._b = value;
        this.calculate();
    }
};

console.log(num3.sum);
num3.a = 100;
console.log(num3.sum);
num3.b = 512;
console.log(num3.sum);