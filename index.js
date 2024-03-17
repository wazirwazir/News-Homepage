const tab = document.querySelector('#tab')
const start = document.querySelector('#start')
const cancel = document.querySelector('#cancel')
const ul = document.querySelector('#ul')

function call() {
    ul.classList.toggle('hide')
    start.classList.toggle('hide')
    cancel.classList.toggle('hide')
}
tab.onclick = call