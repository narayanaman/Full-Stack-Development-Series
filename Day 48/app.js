/*  forEach method to use. */

let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);

const name=["aman","ram","shayam","hari"];
function names(naam){
        console.log(naam);
    }
    name.forEach(names);

    /* map method use. */
    const students =
     {
        name:"Aman Kushwaha",
        age:18,
        grade:"A+",
        marks:95,
    }
  let CGPA=students.map((el)=>{
    return el.marks/10;
  });

/* filter method use. */

let number=[2,4,3,5,7,6,8,9];
let even=number.filter((el) =>{
    console.log(number%2==0);
    // return number%2==0;
});