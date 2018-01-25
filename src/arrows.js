'use strict'

// function add(a,b=1){
//     if(a==0){
//         throw new Error('A is Error')
//     }
//     return a+b;
// }
// console.log(add.length);
// console.log(add(1));


// 箭头函数 
var add=(a,b=1) =>a+b;//一行
var add=(a,b=1) =>{
    console.log("多行");
    return a+b;
}
console.log(add(1));

//对象的函数解构

let json={
    'a':'jsapng',
    'b':'xx'
}

function fun({a,b='web'}){
    console.log(a,b);
}
fun(json);

//数组解构
let arr = ['x','o','j'];
function fun(a,b,c){
    console.log(a,b,c);
}
fun(...arr);

//in的用法
let obj ={a:'xx',b:'oo'};
console.log('a' in obj);
console.log('c' in obj);

let arr1 =['xx',,,];
console.log(1 in arr1);
console.log(0 in arr1);
console.log(2 in arr1);

//数组遍历
let arr2 = ['xx','xo','oo'];
arr2.forEach((val,index)=>console.log(index,val));

arr2.filter(x => console.log(x));

arr2.some(x=>console.log(x));

console.log(arr2.map(x=>'web'));

console.log(arr2.toString());
console.log(arr2.join('|'));