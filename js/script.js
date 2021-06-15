document.addEventListener('DOMContentLoaded', function () {

    let text = document.querySelector('a')
    let button = document.createElement('button')
    let buttonSubmit = document.createElement('button')
    let buttons = document.createElement('div')
    let fullScreen = document.createElement('div')
    let main = document.createElement('div')
    let body = document.querySelector('body');
    let label = document.createElement('label')
    let input = document.createElement('input')
    let lineOne = document.createElement('div')
    let lineTwo = document.createElement('div')
    let inputTwo = document.createElement('input')
    let labelTwo = document.createElement('label')
    let lineThree = document.createElement('div')
    let inputThree = document.createElement('input')
    let labelThree = document.createElement('label')
    let linePass = document.createElement('div')
    let inputPass = document.createElement('input')
    let labelPass = document.createElement('label')


    text.addEventListener('click', showBig)

    function showBig() {
        button.innerHTML = 'Close'
        buttonSubmit.innerHTML = 'Zatwierdź'
        label.innerHTML = 'Name'
        input.type = 'text'
        fullScreen.classList.add('fullScreen')
        main.classList.add('main')
        buttons.classList.add('buttons')
        button.classList.add('close')
        buttonSubmit.classList.add('close')
        lineOne.classList.add('lineOne')
        label.classList.add('name')
        input.classList.add('value')
        lineTwo.classList.add('lineTwo')
        inputTwo.classList.add('value')
        labelTwo.innerHTML = 'Surname'
        labelTwo.classList.add('name')

        lineThree.classList.add('lineThree')
        inputThree.classList.add('value')
        labelThree.innerHTML = 'E-mail'
        labelThree.classList.add('name')

        linePass.classList.add('linePass')
        inputPass.classList.add('value')
        labelPass.innerHTML = 'Password'
        labelPass.classList.add('name')

        body.appendChild(fullScreen)
       
        fullScreen.appendChild(main)
        main.appendChild(lineOne)
        lineOne.appendChild(label)
        lineOne.appendChild(input)
        main.appendChild(lineTwo)
        lineTwo.appendChild(labelTwo)
        lineTwo.appendChild(inputTwo)
        main.appendChild(lineThree)
        lineThree.appendChild(labelThree)
        lineThree.appendChild(inputThree)
        main.appendChild(linePass)
        linePass.appendChild(labelPass)
        linePass.appendChild(inputPass)
        main.appendChild(buttons)
        buttons.appendChild(buttonSubmit)
        buttons.appendChild(button)

        button.addEventListener('click', closeImg)
        function closeImg() {
            fullScreen.parentElement.removeChild(fullScreen)
        }

    }
})