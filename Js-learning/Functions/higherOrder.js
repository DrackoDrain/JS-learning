// Higher Order function


// 1st type 
// function add(a,b, cb){
//     let result = a + b; 
//     cb(result);
// }


// add(3,4,function(result){
//     console.log(result);
// });


// 2nd type 

function add(a,b, cb){
        let result = a + b; 
        cb(result);
    }


    function showResult(result){
        console.log(result);
    }
    add (3,3, showResult)
