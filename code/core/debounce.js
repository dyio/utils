export default function debounce(func,wait,shouldCallImmediate) {
    let timer = null;
    let result = null; // 非延时操作可能需要你返回结果


    function debounced(){
        const context = this;
        if(timer){
            clearTimeout(timer);
        }

        const args = Array.prototype.slice.call(arguments);

        if(shouldCallImmediate){ // 立马执行

            if(timer) return;

            timer=  setTimeout(()=>{
                timer  = null;
            },wait);

           if(!timer) result = func.apply(context,args); //执行

        } else {
            timer = setTimeout(()=>{
                func.apply(context,args);
                timer = null;
            },wait)
        }
        return result;
    }

    debounced.cancel = function(){ // 添加取消功能。。
        timer = null;
        result = null;
        clearTimeout(null);
    }

    return debounced;
}