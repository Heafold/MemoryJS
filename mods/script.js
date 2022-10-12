let cardone = 1;
let cardtwo = 2;
let compt = 0;
const cards= document.querySelectorAll('.card');
console.log(cards)

cards.forEach(card =>{
    let random = Math.floor(Math.random() * 6);
    card.style.order = random;
})

function flip(card) {
    if(cardone != 1 && cardtwo != 2){
        cardone.classList.remove("flipped");
        cardone.classList.add("notflipped");
        cardtwo.classList.remove("flipped");
        cardtwo.classList.add("notflipped");
        cardone = 1;
        cardtwo = 2;
    }
    console.log(card.id);
    let cards = document.getElementById(card.id);
    if (cardone == 1){
        cardone = document.getElementById(card.id);
    }
    else if (cardone != 1 && cardtwo == 2){
        cardtwo = document.getElementById(card.id);
    };
    if (cards.classList.contains('notflipped')) {
        cards.classList.add("flipped");
        cards.classList.remove("notflipped");
    }
    else if (cards.classList.contains('flipped')) {
        cards.classList.add("notflipped");
        cards.classList.remove("flipped");
    };
    console.log(cardone.id);
    console.log(cardtwo.id);
   
}

