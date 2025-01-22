// object is a collection of key:value pairs which are inside {}
//creating student object with name, age, grade using object literal(simple way)
const student1 = {
  name: "Tulasi",
  age: 32,
  grade: "B",
};

// creating empty object and then adding key values
const student2 = {};
student2.name = "Ram";
student2.age = 30;
student2.grade = "A";

// creating object using square bracket notation
const student3 = {};
student3["name"] = "lucky";
student3["age"] = 28;
student3["grade"] = "B";

// print object
console.log(student1); //prints object
console.log(student2.age); //prints age value
console.log(student3["grade"]); //another way of calling value of "grade" of student3

// Array practice
// Array is a collection of objects which are in square braces and they are printed by calling the values through index
// Index always start with 0
// Create an array of 5 colors using array literal
const colors = ["red", "yellow", "blue", "green", "orange"];

// Create an empty array and fill it with 5 numbers by calling index
const num = [];
num[0] = 21;
num[1] = 12;
num[2] = 32;
num[3] = 99;
num[4] = 63;

//  Print all arrays using console.log()
console.log(colors); //print whole array
console.log(num[3]); //print the value at index number 3

// combining objects and arrays
// Create an array of 3 mobile objects
const mobiles = [
  { brand: "infinix", price: 10000, color: "black" },
  { brand: "lava", price: 15000, color: "grey" },
  { brand: "iqoo", price: 20000, color: "green" },
];

// print the array of objects
console.log(mobiles);//prints array
console.log(mobiles[1]);//prints index 1 object
console.log(mobiles[2].brand);//shows brand name of mobile at index 2
console.log(mobiles.length);//prints the length of array. Here len is 3