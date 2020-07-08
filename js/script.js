// declare random number as a const
let randomNumber = Math.round(Math.random() * 100)

// Define history array
let history = []

// declare guesses remaining variable
let guessesRemaining = 5;

// function compares user value to randomly generated value
function guessNumber() {

    // reset input box to 0

    // call input value
    const guess = document.getElementById("userGuess").value;

    // console.log("Guessing a number");

    console.log(`User guessed ${guess}`);

    console.log(randomNumber)

    // compare user input to randomly generated number
    if (guess > 100 || guess < 0 || guess === "") {
        document.getElementById("remainingGuesses").innerHTML = `Please enter a number between 1 and 100!`
    } else if (guess == randomNumber) {
        console.log("you win!")
        document.getElementById("remainingGuesses").innerHTML = `YOU WIN!`
    } else if (guess < randomNumber) {

        guessesRemaining = guessesRemaining - 1
        if (guessesRemaining <= 0) {
            document.getElementById("remainingGuesses").innerHTML = `Out of guesses!`
        } else {
            document.getElementById("remainingGuesses").innerHTML = `Too Low! <br/> Remaining guesses: ${guessesRemaining}`
        }

    } else {
        document.getElementById("userGuess").value = ""
        guessesRemaining = guessesRemaining - 1
        if (guessesRemaining <= 0) {
            document.getElementById("remainingGuesses").innerHTML = `Out of guesses!`
        } else {
            document.getElementById("remainingGuesses").innerHTML = `Too high! <br/> Remaining guesses: ${guessesRemaining}`
        }

    }

    history.push(guess)
    document.getElementById("historyArea").innerHTML = `History ${history}`
    document.getElementById("userGuess").value = ""

}

// reset
// chances back to 5
// reset random number
// reset history
//  clear input
// reset result

function resetNumber() {
    guessesRemaining = 5
    randomNumber = Math.round(Math.random() * 100)
    history = []
    document.getElementById("historyArea").innerHTML = `History ${history}`
    document.getElementById("userGuess").value = ""
    document.getElementById("remainingGuesses").innerHTML = `Remaining guesses: 5`
}