export const checkType = (param) => {
    var result = Object.prototype.toString.call(param);
    return result;
};

checkType(1);
checkType('asdf');
checkType(true);
checkType(Symbol(1));
checkType(BigInt(12312312312312312312312321321312312312312312312312321312312388888));
checkType([1, 2, 3]);
checkType(null);
checkType(undefined);
checkType(() => {});
checkType(new Promise(() => {}));
checkType(document.body);
checkType(document);
checkType(document.createElement('div'));