/*
User enetr s a Max number & then tries to guess a random generated number between 1 to Max.
*/

const max=prompt(`Enter the your random Number :`);
const random=Math.floor(Math.random()*max)+1;
let guess=prompt(`Enter The Guess Number`);
while(true){
    if(guess=="quit"){
        console.log(`user quit`);
        break;
    }
    if(random==guess){
        console.log((`You are Right. Congrats !!! Random Number was ${random}`));
        break;
    }else if(guess<random){
        guess=prompt(` hint:Oh You are entered too small number. Please try Again.`);
    }else{
        guess=prompt(`hint: Oh You are entered too large number. Please try Again.`);
    }
}