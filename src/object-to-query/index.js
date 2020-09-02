export default function (obj) {
  let result = '';
  for (let i in obj){
    result += `${i}=${obj[i]}&`
  }
  return result.slice(0,-1);
}
