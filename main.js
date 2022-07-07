const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400

//GLOBALS VARIABLES

let spacePressed = false
let hue = 0 //color spectrum
let frame = 0
let score = 0
let gamespeed = 2 //Toggle speed to increase difficulty
let gamePlaying = false
let gameDirections = false
let restart = false

const harryPotterPNG = new Image()
harryPotterPNG.src = 'harryicon.png'

const columnJPG = new Image()
columnJPG.src = 'column.jpg'

//Globals for tracking score
let currentScore
let bestScore = 0

///For Menu
document.addEventListener('click', () => (gamePlaying = true))
document.addEventListener('click', () => (gameDirections = true))
document.addEventListener('click', () => (restart = true))

const scoreCompare = () => {
  if (currentScore > bestScore) {
    bestScore = currentScore
  }
}

function animate() {
  currentScore = 0 //current score always initialized to zero at start of game
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  //ctx.fillRect(10, canvas.height - 90, 50, 50)
  handleObstacles()
  harry.update()
  harry.draw()
  handleCollisions()
  requestAnimationFrame(animate) //consider redoing for hogwarts backdrop
  frame++
  scoreCompare()
}


if (gamePlaying) {
  animate()
}
  //Event Listeners
window.addEventListener('keydown', function (e) {
  if (e.code === 'Space') spacePressed = true
})
window.addEventListener('keyup', function (e) {
  if (e.code === 'Space') spacePressed = false
})


