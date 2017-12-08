// Elements

var button = document.getElementById('set-color')
var brush = document.getElementsByClassName('brush')[0]
var input = document.getElementById('color-field')

// Function to change brush color: 

var changeColor = function () {
    event.preventDefault()
    brush.style.backgroundColor = input.value;
}

// Event listener to call function

button.addEventListener('click', changeColor)
