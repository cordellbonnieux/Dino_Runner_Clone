import _ from 'lodash'
import {gameArea} from './game'
import './style.css'

function component() {
    const element = document.createElement('div')

    // Required for Lodash
    element.innerHTML = _.join(['Hello', ' Dino Runner', gameArea()])

    return element
}

document.body.appendChild(component())

