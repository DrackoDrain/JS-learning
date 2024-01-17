let student = {

    name : "Ayush",
    marks : 98.43,
    printMarks : function()  {
        console.log("marks = ", this.marks);

    },
};

const employee ={
    calTax(){
        console.log("Tax is 2 %");
    },
    calTax1 : function(){
        console.log("Tax is 1.5%");

    }
}

// Prototype syntax = we can use another objects in out main objects by creating prototype like -> objects.__proto__objects1
employee.__proto__ = student;