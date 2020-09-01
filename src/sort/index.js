export default function sort(arr, type) {

  switch (type) {
    case 'min':
      return arr.sort((pre, next) => pre - next);
    case 'max':
      return arr.sort((pre, next) => next - pre);
    case 'a':
      return arr.sort();
    case 'z':
      return arr.sort().reverse();
    default:
      throw new Error("type is not defined, please check you type oneOf ['max', 'min', 'a', 'z']");
  }
}
