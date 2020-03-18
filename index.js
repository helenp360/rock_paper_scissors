const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {

if (response.toLowerCase() === "rock" || response.toLowerCase() === "paper" || response.toLowerCase() === "scissors"){
    let options = ["rock", "paper", "scissors"];
    let randomOption = options[Math.floor(Math.random()*options.length)];
    console.log(randomOption);
    if (response.toLowerCase() === randomOption){
        console.log("It's a draw!");
    } else if (response.toLowerCase() === "rock" && randomOption === "paper"){
        console.log("You win!");
    } else if (response.toLowerCase() === "rock" && randomOption === "scissors"){
        console.log("You lose!");
    } else if (response.toLowerCase() === "paper" && randomOption === "rock"){
        console.log("You win!");
    } else if (response.toLowerCase() === "paper" && randomOption === "scissors"){
        console.log("You lose!");
    } else if (response.toLowerCase() === "scissors" && randomOption === "rock"){
        console.log("You lose!");
    } else if (response.toLowerCase() === "scissors" && randomOption === "paper"){
        console.log("You win!");
    };
} else {
    console.log("Please choose either rock, paper or scissors!");
};


    readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);



// ascii art
//console.log("It's a draw!")
//console.log("You win!")
//console.log("You lose!")


//Return result...
//if (result = "draw"){
//     console.log("It's a draw!");
// } else if (result = "win"){
//     console.log("You win!");
// } else if (result = "lose"){
//     console.log("You lose!");
// };

//OBJECTS

// let rock = {
//     win: "scissors",
//     lose: "paper",
//     draw: "rock"
// };