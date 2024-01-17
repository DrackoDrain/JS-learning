// Callback

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

// getData(2, ()=>{
//     getData(3);
// });

// Callback hell
getData(2, ()=>{
    getData(3, ()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});