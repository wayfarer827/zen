let deday = [1, 2, 3, 4, 5]

let reverseNew = x => {
    let newMas = []
    for(i = 0; i < x.length; ++i) {
        newMas.unshift(x[i])
    }
    return newMas
}

let reverseCurrent = y => {
    for(j = 0; j < 8; ++j) {
        y.unshift(y[j])
        y.splice(j + 1, 1)
    }
    return y
}

console.log(reverseCurrent(deday))