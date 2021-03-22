let students = [
    {
name: "Ion",
marks: [6, 7, 5, 4, 3]
},
{
name: "Vlad",
marks: [10, 10, 10, 7, 8]
},
{
name: "Anton",
marks: [9, 9, 9, 9, 9]
},
{
name: "Andrian",
marks: [10, 10, 6, 6, 6]
},
{
name: "Denis",
marks: [9, 4, 3, 2, 1]
}
];

//1 arata numele si media elementului

let AverageMarks = (array) => { 
    for (let value of array) {
        console.log(value.name + ': ' + value.average);
    }
}
 // arata media pt fiecare element al masivului
let middleMark = (students) => {
    const marks = [];
    for (let i in students) {
        let sum = 0;
        for (let j in students[i].marks) {
            sum += students[i].marks[j];
        }
        const student = {};

        student.name = students[i].name;
        student.average = sum / students[i].marks.length;
        marks.push(student);
    }
    return marks;
}







