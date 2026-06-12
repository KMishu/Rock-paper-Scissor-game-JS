let userScore = 00;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msges = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}; 

const drawGame = () =>{
    console.log("match is draw");   
    msges.innerText ="match is draw";
    msges.style.backgroundColor = "#081b31";  
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        console.log("you win");  
        msges.innerHTML = `you win! your ${userChoice} beats ${compChoice}`;
        msges.style.backgroundColor = "green";     
    } else {
        compScore ++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msges.innerHTML = `you lost! ${compChoice} beats your ${userChoice}`;
        msges.style.backgroundColor = "red";         
    }
 }


const playGame = (userChoice) => {
    console.log("userchoice =", userChoice);
    //generate computer choice   
    const compChoice = genCompChoice();
    console.log("compchoice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "rock" ? true : false;            
        }
        else{
            //userchoice = scissor
            //rock, paper
            userWin = compChoice === "rock" ? false: true;
        }
           showWinner(userWin, userChoice, compChoice);
        }
        }



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
