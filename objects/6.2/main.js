class Person {
    set name(value) {
        this._name = value;
    }

    set surname(value) {
        this._surname = value;
    }
    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const worker = new Person();
    console.log(worker.name);
    console.log(worker.surname);
    worker.name = "Ion";
    worker.surname = "Vasile";
    console.log(worker.name);
    console.log(worker.surname);
});