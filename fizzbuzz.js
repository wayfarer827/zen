let numbers = [];
let n = 16

for ( i = 1; i < n; ++i) {
    numbers.push(i)
}

for (j = 0; j < n; ++j) {
    if (numbers[j] % 3 == 0 && numbers[j] % 5 == 0) {
        numbers[j] = 'fizzbuzz'
    }
    else if (numbers[j] % 5 == 0) {
        numbers[j] = 'buzz'
    }
    else if (numbers[j] % 3 == 0) {
        numbers[j] = 'fizz'
    }
}

console.log(numbers)
