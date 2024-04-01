let btn1=document.querySelector("#red");
let btn2=document.querySelector("#yellow");
let btn3=document.querySelector("#blue");
let btn4=document.querySelector("#green");
let btn5=document.querySelector("#light");

let currmode="light";

btn1.addEventListener("click",()=>{
    if (currmode==="light" || currmode==="yellow" || currmode==="blue" || currmode==="green"){
        currmode="red"
        document.querySelector("body").style.backgroundColor="red";
    }
    console.log(currmode);
});


btn2.addEventListener("click",()=>{
    if (currmode==="light" || currmode==="red" || currmode==="blue" || currmode==="green"){
        currmode="yellow"
        document.querySelector("body").style.backgroundColor="yellow";
    }
    console.log(currmode);
});


btn3.addEventListener("click",()=>{
    if (currmode==="light" || currmode==="yellow" || currmode==="red" || currmode==="green"){
        currmode="blue"
        document.querySelector("body").style.backgroundColor="blue";
    }
    console.log(currmode);
});

btn4.addEventListener("click",()=>{
    if (currmode==="light" || currmode==="yellow" || currmode==="blue" || currmode==="red"){
        currmode="green"
        document.querySelector("body").style.backgroundColor="green";
    }
    console.log(currmode);
});

btn5.addEventListener("click",()=>{
    if (currmode==="green" || currmode==="yellow" || currmode==="blue" || currmode==="red"){
        currmode="light"
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
});