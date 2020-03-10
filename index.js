const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {

if (response === "rock" || response === "paper" || response === "scissors"){
    let options = ["rock", "paper", "scissors"];
    let randomOption = options[Math.floor(Math.random()*options.length)];
    console.log(randomOption);
    if (response === "rock" && randomOption === "rock"){
        console.log("It's a draw!");
    } else if (response === "rock" && randomOption === "paper"){
        console.log("You win!");
    } else if (response === "rock" && randomOption === "scissors"){
        console.log("You lose!");
    } else if (response === "paper" && randomOption === "rock"){
        console.log("You win!");
    } else if (response === "paper" && randomOption === "paper"){
        console.log("It's a draw!");
    } else if (response === "paper" && randomOption === "scissors"){
        console.log("You lose!");
    } else if (response === "scissors" && randomOption === "rock"){
        console.log("You lose!");
    } else if (response === "scissors" && randomOption === "paper"){
        console.log("You win!");
    } else if (response === "scissors" && randomOption === "scissors"){
        console.log("It's a draw!");
    };
} else {
    console.log("Please choose either rock, paper or scissors!");
};


    readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);


// make everything lower case - use .toLowerCase()
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