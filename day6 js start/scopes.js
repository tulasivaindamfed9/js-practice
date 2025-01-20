// understanding golbal,functional and block scope
//global scope
let gc="i'm global scope variable";

//functional scope -"here the variables are defined within a function{} and called inside. The variables(inside the function) if called outside will throw an error"
function funscp {
    let funVar="i'm inside funtion"
    console.log(gc); //works here as i'm global variable
    console.log(funvar); //works here
}

console.log(funvar);// throw error
