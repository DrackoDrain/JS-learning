 myFunc = (theObject) => {
    theObject.make = "Porsche";
    theObject.model = "911 Carrera GT";
    theObject.year="2004";

}

const myCar = {
    make : "Honda",
    model:"Accord",
    year:"1998",

};

console.log(myCar.make); // Honda
console.log(myCar.model); // Accord
console.log(myCar.year); // 1998

myFunc(myCar);
console.log("After the modifications ");

console.log(myCar.make); // Porsche
console.log(myCar.model); // 911 Carrera GT
console.log(myCar.year); // 2004