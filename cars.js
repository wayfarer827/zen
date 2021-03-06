let car1 = {
    brand: 'Volkswagen',
    model: 'Polo',
    engineVolume: 1.6,
    color: 'yellow',
    id: 573,
    audio: {
        brand: 'Sony',
        speakers: 12
    },
    driver: {
        name: 'Артур',
        age: 22,
        license: {
            category: 'BC',
            experience: 3
        }
    }
}

let car2 = {
    brand: 'Volkswagen',
    model: 'Jetta',
    engineVolume: 2.0,
    color: 'grey',
    id: 859,
    audio: {
        brand: 'JBL',
        speakers: 6
    },
    driver: {
        name: 'Валентин',
        age: 31,
        license: {
            category: 'B',
            experience: 10
        }
    }
}

car2.driver.name = car1.driver.name

let park = {
    name: 'Максимум',
    license: true,
    rating: 4.5,
    moneyOutput: 'Momentum'
}

car2.park = park

let entries = Object.entries(car2)

for(let [key, val] of entries) {
    console.log(`${key} : ${val}`)
}