const p = new Promise((onDone)=>{
    onDone("hi there");
})

p.then(function(arg){
    console.log(arg);
})