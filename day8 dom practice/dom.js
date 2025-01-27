// creating empty object and giving it's key - value pairs
const subjects={};
subjects.name="maths";
subjects.marks=90;
console.log(subjects);//gives object

// creating object from existing obj
const anotherSub=Object.create(subjects);
anotherSub.name="social";
console.log(anotherSub);




// creating empty array and giving it's objects
const academics=[];
academics[0]={
    name:"maths",
    maks:95
};
academics[1]={
    mane:"science",
    marks:70
};
console.log(academics);
console.log(academics.length);//showing length 2
// we created array objects based on index no. But we can also create array objects with names like academics.math, academics.sci. 
// but here the length of the array shows 0 as arrays calculate the length based on index no.'s provided


// 3 ways to create arrays
let arr1=[10, 20, 30]//literal 
let arr2=new Array(40,50,60);//constructer creates a new array when multiple arguments are passed
let arr3=Array.from("tulasi");//creates a new array from an iterable object, such as a string, Map, Set, or even an array-like object 
console.log(arr2);
console.log(arr3);





