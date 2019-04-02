'use script';

// console.log('Hello World from main.js!');
// console.log('it\'s me!');
// console.log('hell\no wor\tld')
// console.log('hello' + 'world');
// console.log(10 + 3); // 13
// console.log(10 - 3); // 7
// console.log(10 * 3); // 30
// console.log(10 / 3); // 3.333...
// console.log(10 % 3); // 1
// console.log(10 ** 3); // 1000
// console.log((10 + 2) * 3); // 36
// console.log(10 + 2 * 3); // 16

// 定数 const
// console.log(150 * 140)

// const price = 150;
// console.log(price * 140);
// console.log(price * 160);

//  変数 let var(ある名前に割り当てた数が
// コロコロ変わるとわかりにくいからなるべく const を使う）
// let price = 150;
// console.log(price * 140);
// console.log(price * 160);
//
// price = 170;
// console.log(price * 140);
// console.log(price * 160);

//
// let price = 500;
//
// // price = price + 100;
// price += 100; // 600
//
// price *= 2; // 1200
//
// // price = price + 1;
// // price += 1;
// price++; //1201
//
// price--; // price -= 1 1200
//
// console.log(price);
//
// // データ型
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
//
// console.log('5' * 3);
// console.log('5' - '3');
//
// console.log('5' + 3);
// console.log(parseInt('5', 10) + 3);
//
// console.log(parseInt('hello', 10));

// if

// const score = 85;

// if (score >= 80) {
//   console.log('Great!');
// } else {
//   console.log('OK')
// }

// score >= 80 ? console.log('Great!') : console.log('OK...!');

// 論理演算子
// && なおかつ (AND)
// || もしくは (OR)
// ! ～ (NOT)

// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//   if (name === 'taguchi') {
//     console.log('Good job!');
// }


// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }

const signal = 'pink'

// if (signall === 'red') {
//   console.log('stop!');
// } else if (signal === 'yellow') {
//   console.log('caution!')
// } else if (signal === 'blue') {
//   console.log('go!');
// }

switch (signal) {
  case 'red' :
    console.log('stop!');
    break;
  case 'yellow' :
   console.log('caution!');
   break;
  case 'blue' :
  case 'green' :
   console.log('go!');
   break;
  default:
   console.log("wrong signal!");
   break;
 }


// for

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log(i + 'hello');
  console.log(`${i} hello`);
}


// while

let hp = 200;

while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}

for (let hp = 200; hp > 0; hp -=15) {
  console.log(`${hp} HP left!`)
}


for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
  // if (i % 3 === 0){
    // continue;
  // }
  if (i === 4) {
    break;
  }
  console.log(i);
}



// 関数

function showAD(message = 'AD') { // 仮引数
  console.log('----------')
  console.log(`----${message}----`)
  console.log('----------')
}

showAD();
console.log('Tom is great!');
console.log('Bob is great!');
showAD();
console.log('Steve is great!');
console.log('Rich is great!');
showAD();


showAD('Header AD'); // 実引数
console.log('Tom is great!');
console.log('Bob is great!');
showAD('AD');
console.log('Steve is great!');
console.log('Rich is great!');
showAD('Footer AD');


// function sum(a, b, c){
//   // console.log(a + b + c);
//   return a + b + c;
// }

// // sum(1, 2, 3);
// // sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum (3, 4, 5);

// console.log(total);


// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total)


// アロー関数

// const sum =(a, b, c) => {
//   return a + b + c;
// };

// const sum = (a, b, c) => a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total)

// const double = function(a) {
//   return a * 2;
// };
const double = a => a * 2; // 仮引数が一つの時はかっこを外せる
console.log(double(12));


// ↓ JavaScriptはScriptタグを用いて何個でもコードを読み込めるので
// 他の人が書いたコードを読み込んだ時に、定数名・変数名が衝突しない
// ようにコードをボックスで囲ってあげる習慣つけましょう

｛
// Scope (有効範囲)

const x = 2; // すべての範囲で有効な定数 GlobalScope

function f() {
  const x = 1; // ボックス内で同名の定数が定義されてたらそっちが優先
  console.log(x);
}

f();
console.log(x);

｝
