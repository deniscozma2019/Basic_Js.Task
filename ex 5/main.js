const person = {
    name: "Person",
    age: 18,
    salary: 4500.50,
    contacts : {
        phone: "11251456",
        email: "email@domain.com"
    },
    address: "Chisinau"
};
console.log("Initial");
console.log(person);
person.contacts.phone = "+37360472576";

delete person.address;

console.log(person);