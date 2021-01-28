const palindrome = str => {
    str = str.toLowerCase().split(' ').join('')
    return str === str.split('').reverse().join('')
}

console.log(palindrome('леша на полке клопа нашел'))