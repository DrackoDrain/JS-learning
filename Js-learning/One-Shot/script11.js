// Promise -> Promise is for eventual completion of task. It is an object in JS. It is a solution to callback hell.

// let promise = new Promise((resolve,reject) =>{
//     console.log("I am Promise");
//     resolve("SUCCESS");
// });


const getPromise = () => {
    return new Promise((resolve,reject) =>{
        console.log("I am a Promise");
        resolve("success");
        // reject("Network error");
    });

};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fullfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});







// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }