const firstValue = 1;
const secondValue = 30;

let calculateSum = () => {
    let sumValue = 0;
    for (let i = firstValue; i <= secondValue; i++) {
        if (i % 2 == 0) {
            sumValue += i;
        }
    }
    return sumValue;
}

console.log(calculateSum());