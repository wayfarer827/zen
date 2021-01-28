let numbers = [];

let countDia = (x, y, z) => {
    let sum = 0;
    for(i = x; i <= y; i = i + z) {
        numbers.push(i)
    }
    for(j = 0; j < numbers.length; ++j) {
        sum = sum + numbers[j]
    }
    return sum
}

console.log(countDia(1, 10, 1))