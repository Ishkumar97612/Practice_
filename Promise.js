// const promiseObjet = new Promise(function (resolve, reject){
//     let x=3;
//     if(x==2)
//     {
//         resolve("This is correct");
//     }
//     else
//     {
//         reject("This is wrong");
//     }
// })

// promiseObjet.then(function(message){
//     console.log("Message : ", message);
// }).catch(function(message){
//     console.log("Error :", message);
// })

function foo(a)
{
    return new Promise((resolve, reject)=>{
        if(a<10) 
        {
            resolve("Less than 10");
        }
        else
        {
            reject("Greater than 10");
        }
    })
}

foo(10).then((message)=>{
    console.log("Message :", message)
}).catch((message)=>{
    console.log("Error :", message);
})