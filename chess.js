let x = ''

for(i = 0; i < 8; ++i) {
    for(j = 0; j < 4; ++j) {
        x = x + '#'
        x = x + ' '
    }
    if(i % 2 === 0) {
        x = x + '\n' + ' '
    }
    else {
        x = x + '\n'
    }
}

console.log(x)