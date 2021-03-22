let salaries = {
    John: 1500,
    Ann: 1060,
    Pete: 1230
};

const sum = Object.keys(salaries).length === 0 ? 0 : Object.values(salaries).reduce((accumulator, value) => {
    return accumulator + value;
});

console.log(sum);