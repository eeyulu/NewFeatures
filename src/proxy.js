//proxy 代理  预处理

let obj ={
    add:function(val){
        return val+100;
    },
    name:'i am xx'
}

console.log(obj.add(100));
console.log(obj.name);

let pro  = new Proxy({
    add:function(val){
        return val+100;
    },
    name:'i am xx'
},{
    // get set apply
    get:function(target,key,property){
        // console.log("进入预处理");
        console.log(target);
        console.log(key);
        return target[key];
    },
    set:function(target,key,value,receiver){
        console.log(`come in set ${key} = ${value}`);
        return target[key]= value;

    }
});

console.log(pro.name);
console.log(pro.add(100));
pro.name = "oo";
console.log(pro.name);

//apply
let target = function(){
    return 'i am xx';
}
let handler = {
    apply(target,ctx,args){
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
let proxy = new Proxy(target,handler)

console.log(proxy());