let word1 = 'пидор'
let word2 = 'допир'
let word3 = []

word1 = word1.split('')
word2 = word2.split('')

console.log(word1)
console.log(word2)

let anagram = () => {
    for(let i = 0; i < word1.length; ++i) {
        for(let j = 0; j < word2.length; ++j) {
            if(word1[i] == word2[j]) {
                word3.push(word2[j])
                break
            }
        }
    }
    if (word3.length === word1.length) {
        console.log('Анаграма')
    }
}

anagram()

console.log(word3)









// function filter(y, z) {
//     for (let i = 0; i < z.length; ++i) {
//         for (let j = 0; j < y.length; ++j) {
//             if (z[i] == y[j]) {
//                 y = y.slice(0, j).concat(y.slice(j + 1, y.length));
//             }
//         }
//     }
//     return y;
//   }
  
//   let email = ['pridurok@gmail.com', 'oumygadable@mail.ru', 'danilaticrazy@wow.ru', '*_*@hentai.com', 'watafak@fak.ru', 'mazafak@fak.ru', 'fantaziyaend@tr.ru', 'yaustal@ah.ru']
//   let blackMail = ['pridurok@gmail.com', 'danilaticrazy@wow.ru', 'mazafak@fak.ru', '*_*@hentai.com', 'ogotimuzhik@heh.com, votetoh.y@popa.eu']
  
//   console.log(filter(email, blackMail))