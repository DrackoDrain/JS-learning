let btn1 = document.querySelector("#btn1")
console.dir(btn1)

btn1.addEventListener("onclick", (evt) => {
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
});                                                         
console.log("hi");