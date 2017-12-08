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

// add Square class divs * 20
for (i = 0; i < 20; i++) {
    square = document.createElement('div');
    square.className = "square";
    document.body.appendChild(square);
    square.addEventListener('click', function() {
        this.style.backgroundColor = "green";
    })
}
