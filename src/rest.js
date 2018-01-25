function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}

jspang(1,2,3);


let arr1 = ['xx','xx'];
// let arr2 = arr1;
let arr2 = [...arr1];
arr2.push('oo');
console.log(arr1);
console.log(arr2);

//rest ... 运算符
function jsapngxx(first,...arg){
    // console.log(arg.length);
    for(let val of arg){
        console.log(val);
    }
}
jsapngxx(0,1,2,3,4,5,6,7);