const obstaclesArray = []

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20
    this.bottom = (Math.random() * canvas.height) / 3 + 20
    this.x = canvas.width
    this.width = 20
    //this.color = 'hsl(' + '100%, 50%';
  }
  draw() {
    //ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top)
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom)
  }
  update() {
    this.x -= gamespeed
    this.draw()
  }
}

function handleObstacles() {
  //Add new obstacle for every 50 frames
  //Toggle frame to change difficulty level
  if (frame % 20 === 0) {
    obstaclesArray.unshift(new Obstacle())
  }
  //Add new obstacle
  obstaclesArray.forEach((element) => {
    element.update()
  })
  if (obstaclesArray.length > 20) {
    obstaclesArray.pop(obstaclesArray[0])
  }
}
