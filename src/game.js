
let block = document.getElementById('block')

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

export function jump() {
    let character = document.getElementById('character')
    character.classList.add('animate')
    setTimeout(function(){
        character.classList.remove('animate')
    }, 500)
}

export function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop)
        }
}