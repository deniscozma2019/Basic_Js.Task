const array = [12, 4, 8, 10]

const square = (x) => {
    return x * x;
}

const convert = (fn, array) => {
    return array.map(value => value * value);
}

console.log(array);
console.log(convert(square, array));