//Symbol
let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;

let f = Symbol();
console.log(typeof(f));

let xx = Symbol('xx');
console.log(xx);
console.log(xx.toString());

let oo = Symbol();
let obj = {
    [oo]:'oo'
}
console.log(obj[oo]);
obj[oo]='web';
console.log(obj[oo]);


// let objec={name:'xx',skill:'web',age:'13'}
// objec[age]=18;
// for (let key in objec) {
//     console.log(objec[key]);
// }
let objec={name:'xx',skill:'web'}
let age = Symbol();
objec[age]=18;
console.log(objec);
for (let key in objec) {
    console.log(objec[key]);
}

console.log(objec[age]);