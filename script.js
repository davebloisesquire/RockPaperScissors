function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var win = 0;
var lose = 0;
var tie = 0;

function rpc() {
    var yourChoice = prompt("Type r for rock, p for paper or s for scissors");
    var compChoices = ["rock", "paper", "scissors"]
    var compFinalChoice = compChoices[getRandomInt(3)];

    if (yourChoice === "r") {
        alert("You chose rock")
        if (compFinalChoice === "scissors") {
            alert("You win!")
            win++
        } else if (compFinalChoice === "paper") {
            alert("You lose")
            lose++
        } else if (compFinalChoice === "rock") {
            alert("It's a tie")
            tie++
        }
    } else if (yourChoice === "s") {
        alert("You chose scissors")
        if (compFinalChoice === "paper") {
            alert("You win!")
            win++
        } else if (compFinalChoice === "rock") {
            alert("You lose")
            lose++
        } else if (compFinalChoice === "scissors") {
            alert("It's a tie")
            tie++
        }
    } else if (yourChoice === "p") {
        alert("You chose paper.")
        if (compFinalChoice === "rock") {
            alert("You win!")
            win++
        } else if (compFinalChoice === "scissors") {
            alert("You lose")
            lose++
        } else if (compFinalChoice === "paper") {
            alert("It's a tie")
            tie++
        }
    } else {
        alert("I don't know what that is.")
    }

    alert("Wins: " + win + " Loses: " + lose + " Ties: " + tie)
}

rpc();
