let boxes=document.querySelectorAll(".box");
let result=document.querySelector(".msg");
let newbtn=document.querySelector(".new");

let turn0=true;

let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turn0){
            console.log("o")
            box.innerText="O";
            turn0=false;
            
        }
        else{
            console.log("x");
            box.innerText="X";
            turn0=true;
            
        }
        box.disabled=true;
        winningPattern();
    })
});

let winningPattern=()=>{
    for(let pattern of patterns){
        
        let pos1=(boxes[pattern[0]]).innerText;
        let pos2=(boxes[pattern[1]]).innerText;
        let pos3=(boxes[pattern[2]]).innerText;

        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner is", pos1);
                result.innerText=`winner is ${pos1}`
                for(let box of boxes){
                    box.disabled=true;
                }
            }
        }

    }

}

