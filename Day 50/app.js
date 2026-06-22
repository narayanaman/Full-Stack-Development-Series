// Qs1. Try out the following events in Event Listener on your own :- mouseout- keypress- Scroll- load
// [Use MDN for help]
// const test = document.getElementById("test");

// // Briefly make an <li> orange when the mouse moves off of it

// test.addEventListener("mouseout", (event) => {
//   // highlight the mouseout target
//   event.target.style.color = "orange";
//   // reset the color after a short delay
//   setTimeout(() => {
//     event.target.style.color = "";
//   }, 500);
// });
// //Keypress event
// const log = document.getElementById("log");
// const input = document.querySelector("input");

// input.addEventListener("keypress", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }
// // scroll
// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });

// // Load event

// const log = document.querySelector(".event-log-contents");
// const reload = document.querySelector("#reload");

// reload.addEventListener("click", () => {
//   log.textContent = "";
//   setTimeout(() => {
//     window.location.reload(true);
//   }, 200);
// });

// window.addEventListener("load", (event) => {
//   log.textContent += "load\n";
// });

// document.addEventListener("readystatechange", (event) => {
//   log.textContent += `readystate: ${document.readyState}\n`;
// });

// document.addEventListener("DOMContentLoaded", (event) => {
//   log.textContent += `DOMContentLoaded\n`;
// });

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button

// that changes the button’s color to green when it is clicked.
let btn=document.createElement("button");
document.querySelector("body").append(btn);
btn.innerText="Click Me!";
btn.addEventListener("click",(event)=>{
    btn.style.backgroundColor="green";
});
let input = document.querySelector("#nameInput");
       let heading = document.querySelector("#heading");

       input.addEventListener("input", function () {
           let filteredName = this.value.replace(/[^a-zA-Z ]/g, "");
           
           this.value = filteredName; // invalid characters remove from input
           heading.innerText = filteredName; // show only valid characters
       });


// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading.






