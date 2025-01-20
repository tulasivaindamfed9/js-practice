// Create variables 
let yourName = "tulasi";
let yourAge = 32;
let isStudent = false;

// Try to change const
const graduationYear = 2013;
//  graduationYear = 2024;  // it won't work

// Print all variables
console.log("Name:", yourName);
console.log("Age:", yourAge);
console.log("Student Status:", isStudent);
console.log("Graduation Year:", graduationYear);


// Scope practice
// Global scope
let courseName = "JavaScript";

function practiceScope() {
    // Function scope
    let topic = "Variables";
    console.log(courseName + " - " + topic);
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
    }
    // console.log(detail); // Try uncommenting this
}

practiceScope();