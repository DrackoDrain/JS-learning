// Nested Optional Chaining 

const user = {
    name : "Ayush",
    getAddress(){
        return {
            city: "NewYork",
            zip:"10001"
        };
    }
};

// Tradional Approach 

// let city;
// if(user && user.getAddress){
//     const address  = user.getAddress();
//     if(address){
//         city = address.city;

//     }
// }

// console.log("Tradional Approach ", city);


// Optional Approach 
const city = user?.getAddress?.().city || "Unknown";
console.log("Optional Approach", city);