const card = document.querySelectorAll(".shell-card");

let cardsFlipped = false;
let lockBoard = false;
let cardShellOne, cardShellTwo;

function cardFlip () {
    if (lockBoard) return;
    if (this === cardShellOne) return;

    this.classList.add('flip')
                        
    if (cardsFlipped)   {
        cardsFlipped = true;
        cardShellOne = this;

        return;
    }
        cardShellTwo = this;
        checkCardsMatch();
}

function checkCardsMatch () {
    let isMatch = cardShellOne.dataset.name === cardShellTwo.dataset.name

    isMatch ? disableCards : cardsUnflipped
}

function disableCards () {
    cardShellOne.removeEventListener('click', cardFlip)
     cardShellTwo.removeEventListener('click', cardFlip)
}

function cardsUnflipped () {
    lockBoard = true;

    setTimeout(() => {
        cardShellOne.classList.remove('flip')
        cardShellTwo.classList.remove('flip')


        gameReset()
    }, 2500);

}

function gameReset() {
    [lockBoard, cardsFlipped] = [false, false]
    [cardShellOne, cardShellTwo] = [false, false]
}

(function cardShuffle () {
    card.forEach(card => {
        let randomCard = Math.floor(Math.random() * 12)
        card.style.order = randomCard
    })
})

card.forEach(card => card.addEventListener('click', cardFlip))