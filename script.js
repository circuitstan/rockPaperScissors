
let playerSelection

function computerSelection() {
    let options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random()*options.length)]
}
  
  
function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        alert("You and Computer both choose " + playerSelection + ". Draw!")
        return "draw"

    } else if ((playerSelection == "rock") & (computerSelection == "paper")) {
        alert("Computer selects paper. Paper beats rock. You lose!")
        return "computer wins"

    } else if ((playerSelection == "rock") & (computerSelection == "scissors")) {
        alert("Computer selects scissors. Rock beats scissors. You win!")
        return "player wins"

    } else if ((playerSelection == "paper") & (computerSelection == "rock")) {
        alert("Computer selects rock. Paper beats rock. You win!")
        return "player wins"

    } else if ((playerSelection == "paper") & (computerSelection == "scissors")) {
        alert("Computer selects scissors. Scissors beat paper. You lose!")
        return "computer wins"

    } else if ((playerSelection == "scissors") & (computerSelection == "rock")) {
        alert("Computer selects rock. Rock beats scissors. You lose!")
        return "computer wins"

    } else if ((playerSelection == "scissors") & (computerSelection == "paper")) {
        alert("Computer selects paper. Scissors beat paper. You win!")
        return "player wins"
    }  
}
let score = 0
function game() {

    let oneRound = playRound(playerSelection, computerSelection())

    if (oneRound == "player wins") {
        score += 1
        results.textContent = "Score: " + score
    } else if (oneRound == "computer wins") {
        score -= 1
        results.textContent = "Score: " + score
    }
    
    if (score == -5) {
        results.textContent = "Condolences.. Computer wins the game!"
    } else if (score == 5) {
        results.textContent = "Congratulations! You win the game."
    }
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = (e.target.innerText).toLowerCase()
        //playRound(playerSelection, computerSelection())  
        game()  
    })
})

const container = document.querySelector('#container')
const results = document.createElement('div')

results.textContent = "Score: 0"
results.setAttribute('style', 'padding-top: 10px')

container.appendChild(results)




