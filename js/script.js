// declare random number as a const
let randomNumber = Math.round(Math.random() * 100)

// Define history array
let history = []

// declare guesses remaining variable
let guessesRemaining = 5;

// declare timer value
let startTime = 30

// declare setInterval value
let timerInterval = setInterval(countDown, 1000)

// function starts timer and compares values when btn is pushed
function guessNumber() {

    // call input value
    const guess = document.getElementById("userGuess").value;

    // loop over history array to check input is not repeated
    for (i = 0; i < history.length; i++) {
        if (history[i] === guess) {
            document.getElementById("remainingGuesses").innerHTML = `You guessed that number already!`
            return
        }
    }
    console.log(randomNumber)

    // compare user input to randomly generated number
    if (guess > 100 || guess < 0 || guess === "") {
        document.getElementById("remainingGuesses").innerHTML = `Please enter a number between 1 and 100!`
        guessesRemaining = guessesRemaining - 1
        if (guessesRemaining == 0) {
            document.getElementById("remainingGuesses").innerHTML = `Out of guesses!`
            setTimeout(resetNumber, 3000)
        }
    } else if (guess == randomNumber) {
        console.log("you win!")
        document.getElementById("remainingGuesses").innerHTML = `YOU WIN!`
        return

    } else if (guess < randomNumber) {
        guessesRemaining = guessesRemaining - 1
        if (guessesRemaining <= 0) {
            document.getElementById("remainingGuesses").innerHTML = `Out of guesses!`
            setTimeout(resetNumber, 3000)
        } else {
            document.getElementById("remainingGuesses").innerHTML = `Too Low! <br/> Remaining guesses: ${guessesRemaining}`
        }

    } else {
        document.getElementById("userGuess").value = ""
        guessesRemaining = guessesRemaining - 1
        if (guessesRemaining <= 0) {
            document.getElementById("remainingGuesses").innerHTML = `Out of guesses!`
            setTimeout(resetNumber, 3000)
        } else {
            document.getElementById("remainingGuesses").innerHTML = `Too high! <br/> Remaining guesses: ${guessesRemaining}`
        }

    }

    history.push(guess)
    document.getElementById("historyArea").innerHTML = `History <br/> ${history}`
    console.log(history)
    document.getElementById("userGuess").value = ""
}

// timer function
function countDown() {
    if (startTime == -1) {
        clearTimeout(timerInterval)
        document.getElementById("remainingGuesses").innerHTML = `Out of time!`
    } else {
        document.getElementById("timer").innerHTML = `${startTime}`
        startTime--
    }
}

// reset function
function resetNumber() {
    startTime = 30
    guessesRemaining = 5
    randomNumber = Math.round(Math.random() * 100)
    history = []
    document.getElementById("historyArea").innerHTML = `History ${history}`
    document.getElementById("userGuess").value = ""
    document.getElementById("remainingGuesses").innerHTML = `Remaining guesses: 5`
}