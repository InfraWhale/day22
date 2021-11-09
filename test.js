
// var readlineSync = require('readline-sync');
//
// const pi = Math.PI
//
// var r1 = readlineSync.question('r1? ');
// const C1 = pi*Math.pow(r1, 2)
//
// var r2 = readlineSync.question('r2? ');
// const C2 = pi*Math.pow(r2, 2)
//
// const donut = Math.abs(C1 - C2)
//
// console.log('Area of the donut =' + donut +'cm^2')

// if 사용
// var readlineSync = require('readline-sync');
//
// const pi = Math.PI
//
// var r1 = readlineSync.question('r1? ');
// const C1 = pi*Math.pow(r1, 2)
//
// var r2 = readlineSync.question('r2? ');
// const C2 = pi*Math.pow(r2, 2)
//
// let donut = C1 - C2
//
// if (donut <0){
//     donut = donut*-1
// }
//
// console.log('Area of the donut =' + donut +'cm^2')


// 삼항연산자 사용
var readlineSync = require('readline-sync');

const pi = Math.PI

var r1 = readlineSync.question('r1? ');
const C1 = pi*Math.pow(r1, 2)

var r2 = readlineSync.question('r2? ');
const C2 = pi*Math.pow(r2, 2)

let donut = C1 - C2

donut = donut <0 ? donut *-1 : donut

donut = donut.toFixed(2)

console.log(`도형의 넓이는 ${donut} cm^2 입니다`)