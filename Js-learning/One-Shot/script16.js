function getData(dataId){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data id = ", dataId);
            resolve("success");

        }, 2000);
    });
}

async function getAllData()
{
    console.log("gettting data1........");
    await getData(1);
    console.log("gettting data2........");
    await getData(2);
    console.log("gettting data3........");
    await getData(3);
    console.log("gettting data4........");
    await getData(4);
}

// immediately invoked async function

(async function()
{
    console.log("gettting data1........");
    await getData(1);
    console.log("gettting data2........");
    await getData(2);
    console.log("gettting data3........");
    await getData(3);
    console.log("gettting data4........");
    await getData(4);
})();