// Get DOM elements
let messageElement = document.getElementById("message-el")     //To get main message 
let cardsElement = document.getElementById("card-el")     //To get the card element
let sumElement = document.getElementById("sum-el")       //To get the sum element
let playerElement = document.getElementById("player-el") //To get the player elemet

//Player Object
let player = {
    name: "Christian",
    chips: 145
}

let cards = []      //For cards table
let sum = 0         //For the sum of the card
isAlive = false     //To tell if the player is playing or not
hasBlackJack = false//To tell if the player has the black jack

let message = ""


// Start the Game
function startGame() {
    isAlive = true                  //isAlive will become true because the player is now player
    let firstCard = randomCard()    //Player's First Card
    let secondCard = randomCard()   //Player's Second Card
    sum = firstCard + secondCard    //This is where the cards where added
    cards = [firstCard, secondCard] //Cards Table
    renderGame()
}

// Render the Game State
function renderGame() {
    let chipValue = 25
    
    cardsElement.textContent = "Card: " 
    for(let i = 0; i < cards.length; i++) {     //This loop makes the code optimal to render...
        cardsElement.textContent += cards[i] + " "    //...the values inside of the cards table
    }

    sumElement.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "You want to draw more card?"
    } else if (sum === 21) {
        message = "You Got Black Jack!"
        player.chips += chipValue 
        hasBlackJack = true
        isAlive = true
    } else {
        message = "Sorry, you are out of the game"
        player.chips -= chipValue 
        isAlive = false
    }

    messageElement.textContent = message
    playerElement.textContent = player.name + ": $" + player.chips

    console.log(player.chips)
}

// Draw a New Card
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
    let getCard = randomCard()
    cards.push(getCard)         //This will add at the last part of cards table
    
    sum += getCard              //This will concatenate and add the new card
    renderGame()                //Then re-render the game with updated sum and card table
    }
}

// Generate a Random Card Value
function randomCard() {
    let getCard = Math.floor( Math.random() * 13) + 1
    return getCard
}

