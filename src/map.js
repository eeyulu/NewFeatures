//map
let json = {
    name:'xx',
    skill:'oo'
};

console.log(json.name);

//=>
var map = new Map();
map.set(json,'i am');
console.log(map);
map.set('xo',json);
console.log(map);

//get
console.log(map.get(json));
console.log(map.get('xo'));
//delete
// map.delete(json);
console.log(map);
// map.clear();
console.log(map);

console.log(map.size);

//has => boolen
console.log(map.has('xo'));
