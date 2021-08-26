import _ from 'lodash'
import {game, jump, disableScroll} from './game'
import './style.css'

function component() {
    const element = game()
    document.addEventListener('keyup', event => {
        if (event.key === 'ArrowUp') {
            jump()
            console.log('space pressed')
        }
    })

    // Required for Lodash
    //element.innerHTML = _.join([game()])

    return element
}

document.body.appendChild(component())

