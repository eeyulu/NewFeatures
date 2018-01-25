//Set
let setArr = new Set(['xx','oo','xo']);
setArr.add('web');
setArr.add('xx');//不可重复
console.log(setArr);

//查找 has
console.log(setArr.has('xx'));

// setArr.clear();
setArr.delete('xo');
console.log(setArr);

//for ...of
for(let item of setArr){
    console.log(item);
}

setArr.forEach(e => {
    console.log(e)
});

//size
console.log(setArr.size);





//WeakSet
let weak = new WeakSet();
let obj = {a:'xx',b:'oo'};
let obj1 = {a:'xx',b:'oo'};
weak.add(obj);
weak.add(obj1);
console.log(weak);