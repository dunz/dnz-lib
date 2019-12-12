export const checkType = (param) => {
    var result = Object.prototype.toString.call(param);
    console.log(result);
    return result;
};