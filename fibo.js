let z = [0, 1]
let j = 1
let n = 10

let fibo = n => {
    for(i = 0; i < n; ++i) {
        z.push(z[i] + z[i + 1])
    }
    return z[n]
}

console.log(fibo(1000))
