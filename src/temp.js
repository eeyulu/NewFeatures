export var name = "jspang";
export var b ="技术胖";
export var skill="web";
// export {name, b, skill}
export function add(a,b){
    return a+b;
}

export {
    name as name,
    cname as b,
    skill as skill
}