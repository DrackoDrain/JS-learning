function asyncFunc1(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },3000);
    });
}

console.log("fetching data1..........");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
});