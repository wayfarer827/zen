let gen = (number) => {
    let randomized = 2 + Math.round(Math.random() * number);
    return randomized
}

let cardsQuantity = 12
let cardsColorsQuantity=  3
let firstHand = []

let state = {
    cards: {
        firstCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity)
        },
        
        secondCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity),
        },
        
        thirdCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity),
        },
        
        fourthCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity),
        },
        
        fifthCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity),
        },

        sixthCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity),
        },

        seventhCard: {
            value: gen(cardsQuantity),
            color: gen(cardsColorsQuantity),
        },
    },
}

function rules () {
    if (state.cards.firstCard.value === state.cards.secondCard.value &&
        state.cards.firstCard.color === state.cards.secondCard.color) {
            state.cards.secondCard.value = gen(12),
            state.cards.secondCard.color = gen(3)
    }
    if (state.cards.thirdCard.value === state.cards.firstCard.value &&
        state.cards.thirdCard.color === state.cards.firstCard.color ||
        state.cards.thirdCard.value === state.cards.secondCard.value &&
        state.cards.thirdCard.color === state.cards.secondCard.color) {
            state.cards.thirdCard.value = gen(12),
            state.cards.thirdCard.color = gen(3)
    }
    if (state.cards.fourthCard.value === state.cards.firstCard.value &&
        state.cards.fourthCard.color === state.cards.firstCard.color ||
        state.cards.fourthCard.value === state.cards.secondCard.value &&
        state.cards.fourthCard.color === state.cards.secondCard.color ||
        state.cards.fourthCard.value === state.cards.thirdCard.value &&
        state.cards.fourthCard.color === state.cards.thirdCard.color) {
            state.cards.fourthCard.value = gen(12),
            state.cards.fourthCard.color = gen(3)
    }
    if (state.cards.fifthCard.value === state.cards.firstCard.value &&
        state.cards.fifthCard.color === state.cards.firstCard.color ||
        state.cards.fifthCard.value === state.cards.secondCard.value &&
        state.cards.fifthCard.color === state.cards.secondCard.color ||
        state.cards.fifthCard.value === state.cards.thirdCard.value &&
        state.cards.fifthCard.color === state.cards.thirdCard.color ||
        state.cards.fifthCard.value === state.cards.fourthCard.value &&
        state.cards.fifthCard.color === state.cards.fourthCard.color) {
            state.cards.fifthCard.value = gen(12),
            state.cards.fifthCard.color = gen(3)
    }
    if (state.cards.sixthCard.value === state.cards.firstCard.value &&
        state.cards.sixthCard.color === state.cards.firstCard.color ||
        state.cards.sixthCard.value === state.cards.secondCard.value &&
        state.cards.sixthCard.color === state.cards.secondCard.color ||
        state.cards.sixthCard.value === state.cards.thirdCard.value &&
        state.cards.sixthCard.color === state.cards.thirdCard.color ||
        state.cards.sixthCard.value === state.cards.fourthCard.value &&
        state.cards.sixthCard.color === state.cards.fourthCard.color ||
        state.cards.sixthCard.value === state.cards.fifthCard.value &&
        state.cards.sixthCard.color === state.cards.fifthCard.color) {
            state.cards.sixthCard.value = gen(12),
            state.cards.sixthCard.color = gen(3)
    }
    if (state.cards.seventhCard.value === state.cards.firstCard.value &&
        state.cards.seventhCard.color === state.cards.firstCard.color ||
        state.cards.seventhCard.value === state.cards.secondCard.value &&
        state.cards.seventhCard.color === state.cards.secondCard.color ||
        state.cards.seventhCard.value === state.cards.thirdCard.value &&
        state.cards.seventhCard.color === state.cards.thirdCard.color ||
        state.cards.seventhCard.value === state.cards.fourthCard.value &&
        state.cards.seventhCard.color === state.cards.fourthCard.color ||
        state.cards.seventhCard.value === state.cards.fifthCard.value &&
        state.cards.seventhCard.color === state.cards.fifthCard.color ||
        state.cards.seventhCard.value === state.cards.sixthCard.value &&
        state.cards.seventhCard.color === state.cards.sixthCard.color) {
            state.cards.seventhCard.value = gen(12),
            state.cards.seventhCard.color = gen(3)
    }
}
rules()

let handValue = [state.cards.firstCard.value, state.cards.secondCard.value, state.cards.thirdCard.value, state.cards.fourthCard.value, state.cards.fifthCard.value, state.cards.sixthCard.value, state.cards.seventhCard.value]
let handColors = [state.cards.firstCard.color, state.cards.secondCard.color, state.cards.thirdCard.color, state.cards.fourthCard.color, state.cards.fifthCard.color, state.cards.sixthCard.value, state.cards.seventhCard.value]

function combosHand () {

    // VALUES

    function combosHandValue () {
        var interValueHand=[];
        for(var card of handValue){
            interValueHand[card] = (interValueHand[card]||0)+1;
        }
        var combosValues =[];
        for(var i in handValue) {
            if ( interValueHand[ handValue[i] ] > 1 ) {
                combosValues.push(handValue[i]);
            }
        }
        if (combosValues.length === 5) {
            console.log('You have fullhouse')
        }
        else if (combosValues.length === 4) {
            console.log('You have two pairs')
        }
        else if (combosValues.length === 3) {
            console.log('You have a set')
        }
        else if (combosValues.length === 2) {
            console.log('You have a pair')
        }
        console.log(combosValues)
        return combosValues
    }
    combosHandValue()

    // COLORS
    
    function combosHandColors () {
        var interColorHand=[];
        for(var card of handColors){
            interColorHand[card] = (interColorHand[card]||0)+1;
        }
        var combosColors =[];
        for(var i in handColors) {
        if ( interColorHand[ handColors[i] ] > 1 ) {
                combosColors.push(handColors[i]);
            }
        }
        if (combosColors.length === 5) {
            console.log('You have flush')
        }
        console.log(combosColors)
        return combosColors
    }
    combosHandColors()
}
combosHand()

console.log(state.cards.firstCard)
console.log(state.cards.secondCard)
console.log(state.cards.thirdCard)
console.log(state.cards.fourthCard)
console.log(state.cards.fifthCard)
console.log(state.cards.sixthCard)
console.log(state.cards.seventhCard)
console.log(handValue)
console.log(combosHand());

