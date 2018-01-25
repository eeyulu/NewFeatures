//json数组格式
let json = {
    '0':'js',
    '1':'jsp',
    '2':'jspang',
    length:3
}

// let json = [
//     {'0':'js'},
//     {'1':'jsp'},
//     {'2':'jspang'}
// ]

console.log(json);
let arr = Array.from(json);
console.log(arr);

//Array.of方法
let arr1 = Array.of(3,4,5,6);
console.log(arr1);
let arr2 = Array.of('[3,4,5,6]');
console.log(arr2);  

//find( )实例方法

// value：表示当前查找的值。
// index：表示当前查找的数组索引。
// arr：表示当前数组。
let arr3 = [1,2,3,4,5,6,7];
console.log(arr3.find(function(value,index,arr){
    return value>4;
}))



//fill
let arr4=['js','xx','oo'];
console.log(arr4);
arr4.fill('web',1,2);
console.log(arr4);

//数组循环
for(let val of arr4){
    console.log(val);
}
for(let val of arr4.entries()){
    console.log(val);
}
for(let [index,val] of arr4.entries()){
    console.log(index+":"+val);
}
//entries
let list = arr.entries();
console.log(list.next().value);
console.log('--------------');
console.log(list.next().value);
console.log('**************');
console.log(list.next().value);
console.log('==============');
