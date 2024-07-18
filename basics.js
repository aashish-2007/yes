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

// if... else
let age = 20;

if (age <= 12) {
    console.log("Hello kid.")
}
else if (age <= 18) {
    console.log("Hello teen.")
}
else {
    console.log("Hello adult.")
}

// for loop
let fruits = ["apple", "mango", "pineapple", "banana", "coconut"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// while loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter --;
}
console.log("Happy new year!")


// Arrays(similar to Python lists)
let numbers = [123, 456, 789];
let schools = ["RI", "ASR", "EJC", "ACJC"];
let mixed = [1.23, "Happy", [4, 5, 6]];

console.log(numbers[0])
console.log(schools.length)

schools.push("TMJC"); // insert at end
schools.push("HCI");
console.log(schools);
schools.pop(); // remove from end
console.log(schools);

for (let i = 0; i < schools.length; i++) {
    console.log(schools[i]);
}

// Objects (like dictionaries in Python)
let person = {
    firstName: "Aashish",
    lastName: "Alagendran",
    age: 17,
    isStudent: true,
};

person["age"] = 18;
person["isStudent"] = false;
console.log(person.age);
console.log(person["firstName"], person["lastName"]);

// Functions
function cube(x) {
    return x ** 3;
}

// Arrow functions (shorter)
let magnitude1 = (x, y, z) => Math.sqrt(x**2 + y**2 + z**2);

console.log(magnitude1(3, 4, 5));


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Chickens</title>
	<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
	<h1>Learn About Chickens!</h1>
	<!-- Insert pic of chicken here -->
	<img src="{{ url_for('static' , filename='chicken_pic.jpg') }}>
	
	<p>Imagine a fluffy, feathered bundle of joy with bright, curious eyes and a cheerful "cluck-cluck" that can brighten even the gloomiest day. That's the charm of chickens! These adorable avian friends waddle about with comical determination, their round bodies swaying and tail feathers bobbing as they peck and scratch at the ground. From the soft peeping of fuzzy chicks to the proud strut of a colorful rooster, chickens bring a delightful mix of cuteness and character to any backyard or farm. Their quirky personalities, endearing head tilts, and funny little dances as they search for treats make them nature's own entertainers, spreading smiles and laughter with every cluck and flutter.</p>
	<!-- Add links -->
	<a href="/ducks">Learn About Ducks</a><br>
	<a href="/pandas">Learn About Pandas</a><br>
	<a href="{{ url_for('home') }}">Back To Home</a>
</body>
</html>
