export default function random (type = 'num', length = 10){
    let res = "";
    if (type === 'num')
    for (let i = 1; i <= length ; i++){
        res += Math.floor(Math.random()*10);
    }
    if(type === 'letter')
        for (let i = 1; i <= length ; i++){
            res += Math.random().toString(36).slice(-1)
        }
    return res;
}
