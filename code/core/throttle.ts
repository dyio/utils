export default function throttle(func,interval,options={
    leading:true, // 是否执行首次
    last:true // 是否执行最后一次
}){
    let timer = null;
    let previous = 0;

    return function() {
        const context = this;
        const args = Array.prototype.slice.call(arguments);
        let nowTime = +new Date();

        let rest = interval -  (nowTime - previous); // 剩余时间

        if(rest <= 0 || rest > interval) { // 不剩下时间了(马上执行) 或者系统时间异常了。

            if(timer) {
                clearTimeout(timer);
                timer = null;
            }
            func.apply(context,args);
            previous = nowTime;

        } else {

            timer = setTimeout(function(){
                func.apply(context,args);
                previous = +new Date();
                timer = null;
            },rest);

        }
    }
}