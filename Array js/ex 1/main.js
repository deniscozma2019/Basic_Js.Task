const array = [2,0,5,6,9,8,44,55,63,9555555,12];
let value = 0;

//  metoda for curat
for (let value = 0; value < array.length; item++) {
    console.log(array[value]);
}

// Metoda  (for in)
for (let value in array) {
    console.log(array[value]);
}


// Metoda (for of) //
for (let value of array) {
    console.log(value);
}


// Metoda (while)
while (value < array.length) {
   
    console.log(array[value]);
    
    value++;
}


// Metoda  (do while)
value = 0;

do {
    console.log(array[item]);
    value++;
} while ( value < array.length);


// Metoda (forEach)
array.forEach((value) => {
    console.log(value);
});


// Metoda (map)
array.map((value) => {
    console.log(value);
});


// Metoda (filter)
array.filter((value) => {
    console.log();
});