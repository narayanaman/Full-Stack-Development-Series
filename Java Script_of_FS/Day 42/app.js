// 1. Create a number variable num with some value.
// Now Print "good" if the number is divisible by 10 and print "bad" if it is not.

let num=Number(prompt("Enter a Number"));
if(num%10==0){
    console.log("good");
}else{
    console.log("bad")
}


// 2. Take the user Name & age as input using prompts.
// then return back the following statement to the user as an alert (by substituting their name & age ):

// name is age year old.

let Name = prompt("Enter Your Name :");
let age =prompt("Enter Your Age :");

alert("By substituing their name & age.");

console.log(Name," is ",age," year old.");

