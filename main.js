const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const buttons = document.querySelectorAll('button')
canvas.width = 600
canvas.height = 400

//GLOBALS VARIABLES

let spacePressed = false
let hue = 0 //color spectrum
let frame = 0
let score = 0
let gamespeed = 2 //Toggle speed to increase difficulty
let gamePlaying = false;
let gameDirections = false
let arg = gamePlaying

const harryPotterPNG = new Image()
harryPotterPNG.src = 'harryicon.png'

const columnJPG = new Image()
columnJPG.src = 'column.jpg'

//Globals for tracking score
let currentScore
let bestScore = 0

//Functions
const updateScore = () => {
  if (currentScore > bestScore) {
    bestScore = currentScore
  }
}

function animate() {
  currentScore = 0 //current score always initialized to zero at start of game
  //ctx.fillRect(10, canvas.height - 90, 50, 50)
  console.log(gamePlaying)
  if (gamePlaying) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleObstacles()
    harry.update()
    harry.draw()
    handleCollisions()
    requestAnimationFrame(animate) //consider redoing for hogwarts backdrop
    frame++
    updateScore()
  }
}

animate()

//Update Scores
document.getElementById('best-score').innerHTML = `Best : ${bestScore}`
document.getElementById('current-score').innerHTML = `Current : ${currentScore}`

///Menu Event Listeners
buttons[1].addEventListener('click', () => {
  gamePlaying = true
  console.log(`I'm working! ${gamePlaying}`)
  return gamePlaying
})
buttons[0].addEventListener('click', () => {
  gameDirections = true
  console.log('Place Directions Here')
})

//Window Event Listeners
window.addEventListener('keydown', function (e) {
  if (e.code === 'Space') spacePressed = true
})
window.addEventListener('keyup', function (e) {
  if (e.code === 'Space') spacePressed = false
})
