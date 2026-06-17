
// Qsl. Create a new input and button element on the page using JavaScript only. Set the  
// text of button to "Click me'
let input=document.createElement("input");
document.querySelector("body").append(input);
// input.innerHTML=""
let btn=document.createElement("btton");
document.querySelector("body").append(btn);
btn.innerHTML="<br> <br> Click Me";
btn.setAttribute("id","btn");
input.setAttribute("placeholder","usename");

// Qs2. Add following attributes to the element : 
// Change placeholder value of input to "username" 
// Change the id of button to "btn' 

// Qs3. Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white. 
// btn.querySelector(#btn);
btn.classList.add(".btnstyle");
console.log(btn);
btn.style.color="white";
btn.style.backgroundColor="blue";
btn.style.borderRadius="1rem";


// Qs4. Create an hl element on the page and set its text to "DMO Practice" underlined. 
// Change its color to purple. 

let h1=document.createElement("h1");
document.querySelector("body").prepend(h1);
h1.innerHTML="<u>DOM Practice ";
h1.style.color="purple"


// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", 
// where Delta is bold.

let para=document.createElement("p");
document.querySelector("body").append(para);
para.innerHTML="Apna Colege <b> Delta</b> Practice .";





