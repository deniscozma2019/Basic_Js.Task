class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const worker = new Person();
    console.log(worker.name);
    console.log(worker.surname);
});