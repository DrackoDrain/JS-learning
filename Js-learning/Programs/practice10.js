// For each loops 

/* For each kabhi bhi aapke array me default change krke nahi deta, 
wo change krta hai array ki temporary cope pr juke wajah se array humesha same rehta hai 

*/

var a = [23,345,567,2,3457,2345,22];

a.forEach(function(val){
    console.log(val+2);
})