/*  PRACTICE QUESTION 2. 
    Create a function to roll a Dice & always display the value of the Dice (1 to 6).
*/
function Ludo(){
    let dice=Math.floor(Math.random()*6)+1;
    console.log(dice);
}

/*****************************Concatinate of Arrays************************************/

let str=["Hi ","Aman ","How ","are ","You ???"];

function concat(str){
    let result="";
    for(let i=0; i<=str.length; i++){
        result+=str[i];
    }
    return result;
}
/*                                SCOPE IN CODES                                                  */

let Greet="Hello !!";   // GLOBLE SCOPE
function isGreet(){
    let Greet="Namaste !!!";        //FUNCTION SCOPE
    console.log(Greet);
    function innerGreet(){         //BLOCK SCOPE
        let greet="Pranam";
        console.log(greet);       //LEXICAL SCOPE
    }
}
console.log(Greet);