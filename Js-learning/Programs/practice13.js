// First Class Function 

/* JS me ek concept hota hai jiska matlab ki aap function ko use kar sakte ho as a value */

function abcd(a){
    a();
}

abcd(function(){console.log("HELLO");});