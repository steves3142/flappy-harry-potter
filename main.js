const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400

//Global variables for game

let spacePressed = false
let hue = 0 //color spectrum
let frame = 0
let score = 0
let gamespeed = 2
let gamePlaying = false
let gameDirections = false
let restart = false

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  //ctx.fillRect(10, canvas.height - 90, 50, 50)
  harry.update() 
  harry.draw()
  requestAnimationFrame(animate); //consider redoing for hogwarts backdrop
}
animate()

//Event Listeners
window.addEventListener('keydown', function(e) {
  if (e.code === 'Space') spacePressed = true
  temp++
})
window.addEventListener('keyup', function(e) {
  if (e.code === 'Space') spacePressed = false
})

///For Menu
document.addEventListener('click', () => gamePlaying = true)
document.addEventListener('click', () => gameDirections = true)
document.addEventListener('click', () => restart = true)
