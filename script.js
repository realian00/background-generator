const h3 = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('body')
const randomBtn = document.querySelector('.random')

function initialize() {
    color1.value = '#ff0000'
    color2.value = '#ffff00'
    changeColor()
}

initialize()



function changeColor() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'
    h3.textContent = body.style.background + ';'
}

color1.addEventListener('input', changeColor)
color2.addEventListener('input', changeColor)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  randomBtn.addEventListener('click', function() {
    color1.value = getRandomColor()
    color2.value = getRandomColor()
    changeColor()
  })

