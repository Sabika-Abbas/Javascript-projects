let compScore= 0;
let userScore= 0;

let choices=document.querySelectorAll(".choice");

const userscore=document.getElementById("u-score")
const compscore=document.getElementById("c-score")
const result=document.querySelector(".msg")

const computerchoice=()=>{
    const options=["rock", "paper", "scissor"];
    const compchoice=Math.floor(Math.random()*3);
    return options[compchoice];
}


const game=(userchoice)=>{
    console.log("userchoice is", userchoice)
    const compopt=computerchoice();
    console.log("compchoice is", compopt);
    if(compopt===userchoice){
        console.log("it's a tie");
        result.innerText="both selected same option it's a tie";
        document.querySelector(".msg").style.backgroundColor="cornflowerblue";
        
    }
    else{
        if ((userchoice==="rock" && compopt==="scissor")||
            (userchoice==="paper" && compopt==="rock")||
            (userchoice==="scissor" && compopt==="paper")){
            console.log("you win");
            userScore++;
            userscore.innerText=userScore;
            result.innerText=`You win, you chose ${userchoice} and computer chose ${compopt}`;
            document.querySelector(".msg").style.backgroundColor="green";
            }
        else{
            console.log("computer wins");
            compScore++;
            compscore.innerText=compScore;
            result.innerText=`Computer wins, you chose ${userchoice} and computer chose ${compopt}`;
            document.querySelector(".msg").style.backgroundColor="red";
        }

    
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        game(userchoice);

    });
});











// game();
