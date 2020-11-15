function squareDigits(num){
    const reducer = (accumulator, currentValue) => accumulator + (parseInt(currentValue) * parseInt(currentValue));
    return parseInt(('' + num).split("").reduce(reducer, ""));
}

console.log(squareDigits(9119));