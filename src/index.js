import _ from 'lodash'
import {game} from './game'
import './style.css'

function component() {
    const element = game()

    // Required for Lodash
    //element.innerHTML = _.join([game()])

    return element
}

document.body.appendChild(component())

