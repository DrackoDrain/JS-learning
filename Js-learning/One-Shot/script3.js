let divs = document.querySelectorAll(".box");
console.dir(divs);

// console.dir(abc);

let idx = 1;
for(div of divs)
{
    div.innerTEXT = ` new uique value + ${idx}`;
    
    idx++;
}
