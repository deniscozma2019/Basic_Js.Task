const sumNum = (arr = [], data = +prompt('introduceti valoarea')) => {
    if (data) {
        arr.push(data);
        sumNum(arr);
    }

    if (!arr.length) {
        throw new Error('array gol')
    }

    return arr.reduce((accumulator, value) => accumulator + value)
}

console.log(sumNum());