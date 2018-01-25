//对象 赋值
let name= 'jspang';
let skill = 'web';
// let obj = {name:name,skill:skill};
let obj = {name,skill};
console.log(obj);



//key值的构建
let key="skill";
let object = {
    [key]:'web'
};
console.log(object);

//自定义方法
let obje ={
    add:function(a,b){
        return a+b;
    }
}

console.log(obje.add(1,2));

//is()方法
let obj1 = {name:'jspang'};
let obj2 = {name:'jspang'};
console.log(obj1.name===obj2.name);
console.log(Object.is(obj1.name,obj2.name));

//同值相等
console.log(+0===-0);
console.log(NaN===NaN);//NaN对象
//严格相等
console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN));

//assign
let a = {a:'xx'};
let b = {b:'oo'};
let c = {c:'xo'};
let d =Object.assign(a,b,c);
console.log(d);