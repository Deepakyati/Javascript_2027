// object is collection of properties

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(person.name); // Output: John

console.log(person['age']); // Update age property
console.log(person.age); // Output: 31


person.name = 'Deepak'; // Update name property
console.log(person.name); // Output: Deepak


person.country = 'USA'; // Add new property
person.gender = 'Male'; // Add new property

console.log(person); // Output: { name: 'Deepak', age: 30, city: 'New York', country: 'USA', gender: 'Male' }


for (let key in person) {
    console.log(key + ": " + person[key]);
}