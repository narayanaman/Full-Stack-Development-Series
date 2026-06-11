
/* find the max value of arr. */

let arr=[3,4,6,3,2,9,8,54,4,32,87,90];
console.log("FINDING MINMUM VALUE OF IN THIS ARRAY.");
let result=arr.reduce((max,el) =>{
    if(max>el){
        return max;
    }else{
        return el;
    }
});

/* find the min value of arr. */

let array=[32,45,76,98,56,34,-1,243,-43,65];
console.log("FINDING MINMUM VALUE OF IN THIS ARRAY.");
let output=array.reduce((min,arr)=>{
    if(min<arr){
        return min;
    }else{
        return arr;
    }
});