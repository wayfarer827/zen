let gameZone = document.querySelector('.game-zone')

let player = {
    el: false,
    x: 500,
    y: 100,
    step: 10,
    run: false,
    position: 0,
}

ints = {
    run: false,
}

fps = 1000/60;

function controllers() {
    document.addEventListener('keydown', (e) => {
        switch(e.keyCode) {
            case 38:
                player.run = true;
                player.position = 1;
                break;
            case 37:
                player.run = true;
                player.position = 2;
                break;
            case 39:
                player.run = true;
                player.position = 3;
                break;
            case 40:
                player.run = true;
                player.position = 4;
                break;
        }
    })
    document.addEventListener('keyup', (e) => {
        switch(e.keyCode) {
            case 38:
                player.run = false;
                break;
            case 37:
                player.run = false;
                break;
            case 39:
                player.run = false;
                break;
            case 40:
                player.run = false;
                break;
        }
    })
}

function intervals () {
    ints.run = setInterval(() => {
        if(player.run) {
            switch (player.position) {
                case 1: player.y -= player.step;
                player.el.style.top = `${player.y}px`;
                break
                case 2: player.x -= player.step;
                player.el.style.left = `${player.x}px`;
                break
                case 3: player.x += player.step;
                player.el.style.left = `${player.x}px`;
                break
                case 4: player.y += player.step;
                player.el.style.top = `${player.y}px`;
                break
            }
            
        }
    }, fps)
}

function game () {
    gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px"></div>`
    player.el = document.querySelector('.player')
}

game()

controllers()

intervals()