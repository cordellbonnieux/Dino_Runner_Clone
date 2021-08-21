import _ from 'lodash'

function component() {
    const element = document.createElement('div')

    // Required for Lodash
    element.innerHTML = _.join(['Hello', ' Dino Runner'])

    return element
}

document.body.appendChild(component())