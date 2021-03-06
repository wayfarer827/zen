// let gen = (number) => {
//     let randomized = Math.round(Math.random() * number);
//     return randomized
// }

let state = {
    cards: {
        firstCard: {
            value: null,
            color: null
        },
        
        secondCard: {
            value: null,
            color: null
        },
        
        thirdCard: {
            value: null,
            color: null
        },
        
        fourthCard: {
            value: null,
            color: null
        },
        
        fifthCard: {
            value: null,
            color: null
        },
    },
    generator: function() {
        let random = (number) => {
            let randomized = Math.round(Math.random() * number);
            return randomized
        }
        this.firstCard.value = random(12)
        this.firstCard.color = random(3)
        this.secondCard.value = random(12)
        this.secondcolor = random(3)
        this.thirdCard.value = random(12)
        this.thridCard.color = random(3)
        this.fourthCard.value = random(12)
        this.fourthCard.color = random(3)
    },
}

state.generator()
// if (firstCard.value === secondCard.value && firstCard.color === secondCard.color) {
//     secondCard.value = gen(13),
//     secondCard.color = gen(4)
// }

console.log(state.cards.firstCard)
console.log(state.cards.secondCard)