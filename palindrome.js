let phrase = 'леша на полке клопа нашел'
let phrase2 = 'иди нахуй сука'
let rphrase = []

function reverb(x) {
    let trimPhrase = x.split(' ').join('')
    for (let i = 0; i < trimPhrase.length; ++i ) {
        rphrase.unshift(trimPhrase[i])
        rphrase1 = rphrase.join('')
    }
    if ( trimPhrase == rphrase1 ) {
        return('это палиндром')
    }
    else {
        return('это говно')
    }
}

console.log(reverb(phrase))
console.log(rphrase1)