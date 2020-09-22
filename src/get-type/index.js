export default function getType(attr) {
    let type = Object.prototype.toString.call(attr);
    return type.substr(8, type.length - 9);

}
