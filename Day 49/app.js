let para1=document.createElement("p");
para1.innerText="Hey i'm  Red !!";
document.querySelector("body").prepend(para1);

para1.classList.add("red");

let heading3=document.createElement("h3");
heading3.innerText="I'm Blue !! h3 ";
document.querySelector("body").prepend(heading3);

heading3.classList.add("blue");

let container=document.createElement("div");
let heading1=document.createElement("h1");
let paragraph=document.createElement("p");

heading1.innerText="I'm in a Div !!!";
paragraph.innerText="Me TOO !!!";

container.append(heading1);
container.append(paragraph);
// document.querySelector("div").append(paragraph);
// document.querySelector("div").append(heading1);
// document.querySelector("body").append(container);
container.classList.add("pink");

document.querySelector("body").prepend(container);
// h3 = i am a blue h3 ..,
// div{
//     h1=i am in a div
//     ME TOO !!!
// }