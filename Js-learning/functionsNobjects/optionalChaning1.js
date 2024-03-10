const user = {
    name: "Ayush",
    address: {
        city: "Newyork",
        zipcode: "10001"
    }
};

// Tradional Approach 
// let city;
// if (user && user.address && user.address.city) {
//     city = user.address.city;
// }else{
//     city = "unknown";
// }

// console.log("Tradional Approach", city);


// Optional Chaining Approach 

const city = user?.address?.city || "Unknown";
console.log("Optional Approach", city );