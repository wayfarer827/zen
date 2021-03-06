let firstHand = [];
let secondHand = [];
let firstCard = null;
let secondCard = null;
let thirdCard = null;
let fourthCard = null;
let fifthCard = null;

let gen = () => {
    let randomized = Math.round(Math.random() * 51);
    return randomized
}

let handGen = () => {
    firstCard = gen()
    secondCard = gen()
    function rules () {
        if (firstCard === secondCard) {
            secondCard = gen()
        }
        if (firstCard > 38) {
            firstCard = `${firstCard - 38}♧`
        }
        if (firstCard > 25) {
            firstCard = `${firstCard - 25}♥`
        }
        if (firstCard > 12) {
            firstCard = `${firstCard - 12}♢`
        }
        if (firstCard > -1) {
            firstCard = `${firstCard}♤ `
        }
        if (secondCard > 38) {
            secondCard = `${secondCard - 38}♧`
        }
        if (secondCard > 25) {
            secondCard = `${secondCard - 25}♥`
        }
        if (secondCard > 12) {
            secondCard = `${secondCard - 12}♢`
        }
        if (secondCard > -1) {
            secondCard = `${secondCard}♤ `
        }
    }
    rules()
}

let tableGen = () => {
    thirdCard = gen()
    fourthCard = gen()
    fifthCard = gen()
    function rules () {
        if (firstCard === thirdCard || secondCard === thirdCard) {
            thirdCard = gen()
        }
        if (firstCard === fourthCard || secondCard === fourthCard || thirdCard === fourthCard) {
            fourthCard = gen()
        }
        if (firstCard === fifthCard || secondCard === fifthCard || thirdCard === fifthCard || fourthCard === fifthCard) {
            fifthCard = gen()
        }
        if (firstCard === secondCard) {
            secondCard = gen()
        }
        if (thirdCard > 38) {
            thirdCard = `${thirdCard - 38}♧`
        }
        if (thirdCard > 25) {
            thirdCard = `${thirdCard - 25}♥`
        }
        if (thirdCard > 12) {
            thirdCard = `${thirdCard - 12}♢`
        }
        if (thirdCard > -1) {
            thirdCard = `${thirdCard}♤ `
        }
        if (fourthCard > 38) {
            fourthCard = `${fourthCard - 38}♧`
        }
        if (fourthCard > 25) {
            fourthCard = `${fourthCard - 25}♥`
        }
        if (fourthCard > 12) {
            fourthCard = `${fourthCard - 12}♢`
        }
        if (fourthCard > -1) {
            fourthCard = `${fourthCard}♤ `
        }
        if (fifthCard > 38) {
            fifthCard = `${fifthCard - 38}♧`
        }
        if (fifthCard > 25) {
            fifthCard = `${fifthCard - 25}♥`
        }
        if (fifthCard > 12) {
            fifthCard = `${fifthCard - 12}♢`
        }
        if (fifthCard > -1) {
            fifthCard = `${fifthCard}♤ `
        }
    }
    rules()
}

handGen()
tableGen()

firstHand.push(firstCard, secondCard)


console.log(firstCard, secondCard, thirdCard, fourthCard, fifthCard)
console.log(firstHand)

let firstCard = {
    value: gen()
}