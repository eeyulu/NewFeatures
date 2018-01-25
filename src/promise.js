//promise   1、洗菜做饭 2、坐下来吃饭 3、收拾桌子洗碗。

let state = 1;

function step1(resolve,reject){
    console.log('1、洗菜做饭');
    if(state==1){
        resolve('洗菜做饭.完成');
    }else{
        reject("洗菜做饭.错误");
    }
}
function step2(resolve,reject){
    console.log('2、坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭.完成');
    }else{
        reject("坐下来吃饭.错误");
    }
}
function step3(resolve,reject){
    console.log('3、收拾桌子洗碗');
    if(state==1){
        resolve('收拾桌子洗碗.完成');
    }else{
        reject("收拾桌子洗碗.错误");
    }
}

new Promise(step1)
.then(function(val){
    console.log(val);
    return new Promise(step2);
})
.then(function(val){
    console.log(val);
    return new Promise(step3);
})
.then(function(val){
    console.log(val);
})