
export function game() {
    let game = createActor('game')
    game.appendChild(createActor('character'))
    game.appendChild(createActor('block'))

    return game 
}

function createActor(idName) {
    let div = document.createElement('div')
    div.id = idName
    return div
}