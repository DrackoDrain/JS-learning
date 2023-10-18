/*
Lexical Environment : In Lexical Environment we have a chart like which particular function will be accessed 
in another word -> it holds it's scope and scope chain 


Execution Context : Execution context is a container where the function code is executed and its created whenever 
a function is called, it had mainly 3 things 

1)  Variables
2)  Function inside that parent function 
3)  Lexical environment of that function 

*/

function abcd(){
    var a = 12;
    function xyz(){
        var b = 12;  // yha pe 'var b' only 'xyz function' me available rhega coz of lexical environment
    }
    console.log(a);
}

abcd();