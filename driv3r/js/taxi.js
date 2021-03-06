// OBJECTS

let driver = {
    name: 'Ryan',
    health: 100,
    satiety: 100,
    sleep: 100,
    money: 500,
    rating: 5.0,
    level: 1,
    experience: 0
}

let car1 = {
    brand: 'Volkswagen',
    model: 'Polo',
    fuel: 20,
    health: 100,
    clean: 100
}

let timing = {
    minutes: 0,
    hours: 0,
    days: 0
}

// MEMORY

document.addEventListener("click", setMemory);

function setMemory() {
    localStorage.setItem('sleep', driver.sleep.toString());
    localStorage.setItem('fuel', car1.fuel.toString());
    localStorage.setItem('satiety', driver.satiety.toString());
    localStorage.setItem('clean', car1.clean.toString());
    localStorage.setItem('money', driver.money.toString());
    localStorage.setItem('minutes', timing.minutes.toString());
    localStorage.setItem('hours', timing.hours.toString());
    localStorage.setItem('days', timing.days.toString());
    localStorage.setItem('rating', driver.rating.toString());
    localStorage.setItem('lvl', driver.level.toString());
    localStorage.setItem('experience', driver.experience.toString());
}

document.addEventListener("DOMContentLoaded", getMemory);

function getMemory() {
    driver.sleep = Number(localStorage.getItem('sleep'));
    car1.fuel = Number(localStorage.getItem('fuel'));
    driver.satiety = Number(localStorage.getItem('satiety'));
    car1.clean = Number(localStorage.getItem('clean'));
    driver.money = Number(localStorage.getItem('money'));
    timing.minutes = Number(localStorage.getItem('minutes'));
    timing.hours = Number(localStorage.getItem('hours'));
    timing.days = Number(localStorage.getItem('days'));
    driver.rating = Number(localStorage.getItem('rating'));
    driver.level = Number(localStorage.getItem('lvl'));
    driver.experience = Number(localStorage.getItem('experience'));
}

// RULES
document.addEventListener("DOMContentLoaded", rules);

document.addEventListener("click", rules);

function rules () {
    if(driver.satiety > 100) {
        driver.satiety = 100
    }
    if(driver.satiety < 1) {
        driver.satiety = 0
        alert('Ты обессилел и сдох')
    }
    if(driver.sleep > 100) {
        driver.sleep = 100
    }
    if(driver.sleep < 1) {
        driver.sleep = 0
        alert('Ты уснул за рулем и сдох')
    }
    if(driver.experience > 10) {
        driver.level += 1
        driver.experience = 0
    }
    if(car1.clean > 100) {
        car1.clean = 100
    }
    if(car1.clean < 40) {
        driver.rating -= 0.1
    }
    if(car1.fuel > 100) {
        car1.fuel = 100
    }
    if(car1.fuel < 1) {
        car1.fuel = 0
        document.getElementById("trip").disabled = true
        document.getElementById("trip2").disabled = true
        document.getElementById("fillFuel").style.pointerEvents = 'none'
    }
    if(car1.fuel > 1) {
        document.getElementById("trip").disabled = false
        document.getElementById("trip2").disabled = false
        document.getElementById("fillFuel").style.pointerEvents='auto'
    }
}

document.getElementById("trip2").hidden = true

// INTERFACE

document.addEventListener("DOMContentLoaded", interface);
document.addEventListener("click", interface);

function interface() {
    document.getElementById("interfaceMoney").innerHTML = `${driver.money} Rubles`
    document.getElementById("interfaceSatiety").innerHTML = `${driver.satiety}`
    document.getElementById("interfaceSleep").innerHTML = `${driver.sleep}`
    document.getElementById("interfaceDate").innerHTML ="Date:"+ timing.days + "Time:" + timing.hours + ":" + timing.minutes;
    document.getElementById("interfaceFuel").innerHTML = `${car1.fuel}`
    document.getElementById("interfaceClean").innerHTML = `${car1.clean}`
    document.getElementById("interfaceRating").innerHTML = `Rating: ${driver.rating}`
    document.getElementById("interfaceLevel").innerHTML = `LVL: ${driver.level}`
    document.getElementById("interfaceExperience").innerHTML = `Exp: ${driver.experience}/10`
}

// ACTIONS

function trip () {
    let range = Math.round(Math.random() * 100);
    driver.money = driver.money + (range * 7);
    driver.satiety -= 10;
    driver.sleep -= 5;
    driver.experience += 1;
    car1.health -=1;
    car1.fuel = Math.round(car1.fuel - range / 7);
    car1.clean -=2;
    timing.minutes = timing.minutes + (range)
}

function buy2 () {
    driver.money -= 1000;
    document.getElementById("buy2").disabled = true;
    document.getElementById("buy2").hidden = true;
    document.getElementById("trip2").hidden = false;

}

function trip2 () {
    let range = Math.round(Math.random() * 100);
    driver.money = driver.money + (range * 8);
    driver.satiety -= 8;
    driver.sleep -= 4;
    driver.experience += 2;
    car1.health -=0.8;
    car1.fuel = Math.round(car1.fuel - range / 8);
    car1.clean -=1.5;
    timing.minutes = timing.minutes + (range)
}

function rent () {

}

function eatShaverma () {
    driver.money = driver.money - 200
    driver.satiety += 50
    driver.sleep -=5
    timing.minutes += 30
}

function eatBurgerKing () {
    driver.money = driver.money - 300
    driver.satiety += 100
    driver.sleep -=5
    timing.minutes += 40
}

function sleep () {
    driver.sleep += 70
    driver.satiety -= 70
    timing.hours += 8
}

function washCar () {
    driver.money -= 150
    car1.clean +=100
    timing.minutes +=30
}

function fillFuel () {
    driver.money -= 1000
    car1.fuel += 50
    timing.minutes +=10
}

function towTruck () {
    driver.money -= 5000
    car1.fuel +=100
    timing.hours += 2
}

//TIME

document.addEventListener("click", time);

function time () {
    if (timing.minutes > 59) {
        timing.hours += 1;
        timing.minutes = timing.minutes - 60
    }
    if (timing.hours > 23) {
        timing.days += 1
        timing.hours = 0
        driver.money -= 1000
    }
}

// TIPS

document.addEventListener("click", tips)

function tips() {
    if(driver.satiety < 30) {
        document.getElementById("interfaceSatiety").style.color = "red";
    }
    if(driver.satiety > 30) {
        document.getElementById("interfaceSatiety").style.color = "white";
    }
    if(driver.sleep < 30) {
        document.getElementById("interfaceSleep").style.color = "red";
    }
    if(driver.sleep > 30) {
        document.getElementById("interfaceSleep").style.color = "white";
    }
    if(car1.clean < 50) {
        document.getElementById("interfaceClean").style.color = "red";
    }
    if(car1.clean > 50) {
        document.getElementById("interfaceClean").style.color = "white";
    }
    if(car1.fuel < 30) {
        document.getElementById("interfaceFuel").style.color = "red"
    }
    if(car1.fuel > 30) {
        document.getElementById("interfaceFuel").style.color = "white"
    }
}


