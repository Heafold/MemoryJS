let cardone = 1;
let cardtwo = 2;
let compt = 0;
const cards = document.querySelectorAll('.card');
console.log(cards)

cards.forEach(card => {
    let random = Math.floor(Math.random() * 6);
    card.style.order = random;
})

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if (this.classList.contains('notflipped')) {
        if (this.classList.contains('card1')){
            this.classList.add('flipped1');
            this.classList.remove('notflipped');
        }
        if (this.classList.contains('card2')){
            this.classList.add('flipped2');
            this.classList.remove('notflipped');
        }
        if (this.classList.contains('card3')){
            this.classList.add('flipped3');
            this.classList.remove('notflipped');
        }
       
        if (cardone == 1) {
            cardone = this;
            console.log(cardone, cardtwo)
            if (cardone != 1 && cardtwo != 2) {
                verif()
            }
        }
        else if (cardtwo == 2) {
            cardtwo = this;
            console.log(cardone, cardtwo)
            if (cardone != 1 && cardtwo != 2) {
                verif()
            }
        }


    }

}

function verif() {
    if (cardone.classList.contains('card1') && cardtwo.classList.contains('card1')) {
        cardone.classList.add('ok')
        cardtwo.classList.add('ok')
        cardone = 1
        cardtwo = 2
    }
    else if (cardone.classList.contains('card2') && cardtwo.classList.contains('card2')) {
        cardone.classList.add('ok')
        cardtwo.classList.add('ok')
        cardone = 1
        cardtwo = 2
    }
    else if (cardone.classList.contains('card3') && cardtwo.classList.contains('card3')) {
        cardone.classList.add('ok')
        cardtwo.classList.add('ok')
        cardone = 1
        cardtwo = 2
    }
    else {
        setTimeout(() => {
            cardone.classList.remove('flipped1')
            cardone.classList.remove('flipped2')
            cardone.classList.remove('flipped3')
            cardone.classList.add('notflipped')
            cardtwo.classList.remove('flipped1')
            cardtwo.classList.remove('flipped2')
            cardtwo.classList.remove('flipped3')
            cardtwo.classList.add('notflipped')
            cardone = 1
            cardtwo = 2

        }, "400")
    }
}


function replay(){
    location.reload();
}



