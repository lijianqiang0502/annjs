export default function debounce (fun, delay = 1000, ...args){
    let timer;
    return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            fun(...args);
        }, delay)
    }
}
