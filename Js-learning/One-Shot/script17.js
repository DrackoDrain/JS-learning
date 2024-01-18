// API call 


const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn1 = document.querySelector("#bat");


const getFacts = async () => {
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    console.log(data[1].text);
    factPara.innerText = data[1].text;
}

// By Promise Chain Method

// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data[1]);
//         factPara.innerText = data[1].text;
//     });
// }

btn1.addEventListener("click", getFacts);