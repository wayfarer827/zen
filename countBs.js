let x = 'Ебал я в рот такой завод, за десять лет кило конфет'

let countBs = z => {
    let y = 0
    for (i = 0; i < x.length; ++i) {
        if(z === x.charAt(i)) {
            ++y
        }
    }
    return y
}

console.log(countBs('т'))