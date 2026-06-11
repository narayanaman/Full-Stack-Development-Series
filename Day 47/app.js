const arrayAverage= () => {
 let arr=prompt(`Enter Your Array .`).split(",").map(Number);
    let sum=0;
    for(let i=0; i<arr.length; i++){
        // str=arr[i];
        console.log(`${i} arr index and value ${arr [i]} `);
        sum+=arr[i];
    }   
    let avg=sum/arr.length;
    console.log(`That is Average ${avg}`);
};
arrayAverage();

const object={
    message:'Hello , World ',
    longMessage(){
        console.log(this.message);
    }
};

setTimeout(object.longMessage,1000);


let length=4;
function callback(){
    console.log(this.length);

}
const object={
    length=5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);

