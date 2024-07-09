// Basics
let myName = "Aashish"; // Must use Camelcase for variables
const myAge = 17;
let myPhone = 94694920;
myPhone = 12345678;
let myArr = [1, 2, 3, 4, 5];
let isHuman = true;     // true or false

console.log(myName);
console.log(myAge);
console.log(myPhone);
console.log(myArr);
console.log(isHuman);

// Playing with numbers
let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7;// power
let d = 123 % 45; // remainder
console.log(a, b, c, d);

let e = Math.random();
let f = Math.round(123.456789);
let g = Math.cos(Math.PI);
let h = Math.E ** 2;
console.log(e);
console.log(f);
console.log("cos(pi) = " + g);
console.log("e-squared = " + h);

// Strings
let firstName = "Andrew"
let lastName = "Tay"
let fullName = firstName + " " + lastName;
let nameLength = fullName.length;
console.log(fullName + ", Length: " + nameLength);

let language = "JavaScript";
console.log(language[0]);
console.log(language.substring(2, 5));
console.log(language.toUpperCase());
console.log(language.replace("Java", "Type"));
console.log(language.includes("Java"));
// use string literals
console.log(`But I also like ${language.toLowerCase()}!`);
