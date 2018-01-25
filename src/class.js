//class

class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name("jspang"+":Skill-"+val));
    }
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a+this.b;
    }

}

class htmler extends Coder{

}
let pa = new htmler();
console.log(pa.name('jspang'));


// let jspang = new Coder;
// jspang.name('xx');
// jspang.skill('web');

// let js = new Coder(1,2);
// console.log(js.add());