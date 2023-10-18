// For in loops 

// this loop is used to copy objects in Js

var obj ={
    name : "Aryan",
    Age : 20,
    Skin : "white",
}

for (var key in obj ){
    console.log(key, obj[key]);
}