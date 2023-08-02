console.log("start");

setTimeout(()=>{
    console.log("2 sec later");
},2000);

setTimeout(()=>{
    console.log("0 sec Later");
}),0;

console.log("end");