let student = {

    name : "Ayush",
    marks : 98.43,
    calTax(){
        console.log("Tax is 3 %"); // this will win because this function is in objects prototype so this priority high.
    },
    printMarks : function()  {
        console.log("marks = ", this.marks);

    },
};
let student1 = {

    name : "Ayush",
    marks : 98.43,
    printMarks : function()  {
        console.log("marks = ", this.marks);

    },
};
let student2 = {

    name : "Ayush",
    marks : 98.3,
    printMarks : function()  {
        console.log("marks = ", this.marks);

    },
};
const student3 = {

    name : "Ayush",
    marks : 98.4,
    printMarks : function()  {
        console.log("marks = ", this.marks);

    },
};

const employee ={
    calTax(){
        console.log("Tax is 2 %");
    },
    // calTax1 : function(){
    //     console.log("Tax is 1.5%");

    // }
}

// Prototype syntax = we can use another objects in our main objects by creating prototype like -> objects.__proto__objects1

// employee.__proto__ = student;


student.__proto__ = employee;
student1.__proto__ = employee;
student2.__proto__ = employee;
student3.__proto__ = employee;





