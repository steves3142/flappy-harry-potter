const obstaclesArray = []

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20
    this.bottom = (Math.random() * canvas.height) / 3 + 20
    this.x = canvas.width
    this.width = 20
    //this.color = 'hsl(' + '100%, 50%'; //Rectangle color
  }
  draw() {
    //ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top) //top pipe
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom) //bottom pipe
  }
  update() {
    this.x -= gamespeed
    this.draw()
  }
  xPosition() {
    return this.x
  }
  topHeight() {
    return this.top
  }
  botHeight() {
    return this.bottom
  }
}

//const obstacle = new Obstacle()

function handleObstacles() {
  //Add new obstacle for every 50 frames
  //Toggle frame to change difficulty level
  if (frame % 500 === 0) {
    obstaclesArray.unshift(new Obstacle())
  }
  //Add new obstacle
  obstaclesArray.forEach((element) => {
    element.update() //rectangle will be drawn
  })
  if (obstaclesArray.length > 10) {
    obstaclesArray.pop(obstaclesArray[0])
  }
  //console.log(obstaclesArray.length)
  //console.log(obstaclesArray)
  //Check bird-rectangle collision by checking edges
  //calculate the distance of each object to bird
  //calculate the distance of each object's corner to each bird
}

function handleCollisions() {
  let xDistance = 0
  let yDistanceBot = 0
  let yDistanceTop = 0
  obstaclesArray.forEach((element) => {
    xDistance = element.xPosition()
    //xDistance -= harry.xPosition() + harry.sideLength() //subtract to find relative distance could be (+/-)
    yDistanceBot = canvas.height - element.botHeight()
    //yDistanceBot -= harry.yPosition() //subtract to find relative distance could be (+/-)
    yDistanceTop = element.topHeight()
    //yDistanceTop -= harry.yPosition() + harry.sideLength() //subtract to find relative distance could be (+/-)

    //console.log(xDistance)
    let xPosHarry = harry.xPosition()
    let yPosHarry = harry.yPosition()
    //console.log(yPosHarry)
    //console.log(yDistanceBot)
    //console.log(yDistanceTop)
    if (yPosHarry >= yDistanceBot && xPosHarry == xDistance) {
      //Game Over
      console.log('Game Over')
    } else if (yPosHarry <= yDistanceTop && xPosHarry == xDistance) {
      //Game Over
      console.log('Game Over')
    } else if (yPosHarry <= yDistanceTop && xPosHarry - 20 == xDistance) {
      //Game Over
      console.log('Game Over')
    } else if (yPosHarry >= yDistanceBot && xPosHarry - 20 == xDistance) {
      //Game Over
      console.log('Game Over')
    } else {
      //console.log('Stay clear from the columns!')
    }
  })
}
