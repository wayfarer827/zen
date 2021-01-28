let vowels = ['a', 'e', 'i', 'o', 'u']
let sentence = 'fucken fuck ti pidor'
let sentenceArr = sentence.split('')
let quantity = 0

for(i = 0; i < vowels.length; ++i) {
    for(j = 0; j < sentenceArr.length; ++j) {
        if(vowels[i] === sentenceArr[j]) {
            ++quantity
        }
    }
}

console.log(quantity)
