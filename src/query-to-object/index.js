export default function queryToObject (str) {
  let res = {};
  let group = str.split("&");
  group.forEach(item=>{
    let self = item.split("=");
    res[self[0]] = self[1];
  })
  return res;
}
