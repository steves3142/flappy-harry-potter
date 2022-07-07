let obstaclesArray = []

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20
    this.bottom = (Math.random() * canvas.height) / 3 + 20
    this.x = canvas.width
    this.width = 20
    this.scoreRecorded = false; 
  }
  scored() {
    return this.scoreRecorded
  }
  draw() {
    ctx.fillStyle = 'white'
    ctx.fillRect(this.x, 0, this.width, this.top) //top pipe
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom) //bottom pipe
    ctx.drawImage(columnJPG, this.x, 0, this.width, this.top)
    ctx.drawImage(
      columnJPG,
      this.x,
      canvas.height - this.bottom,
      this.width,
      this.top
    )
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

function pointAccumulator(arg) {
  objectX = arg.xPosition()
  score = arg.scored()
  harryX = harry.xPosition()
  if (objectX < harryX && score == false) {
    console.log('score recorded')
    arg.scoreRecorded = true
    return 1
  } else {
    return 0
  }
}

function handleObstacles(value) {
  let accrue = 0
  accrue += value
  //Add new obstacle for every 50 frames
  //Toggle frame to change difficulty level
  if (frame % 50 === 0) {
    obstaclesArray.unshift(new Obstacle())
  }

  //Add new obstacle
  obstaclesArray.forEach((element) => {
    let temp = 0
    element.update() //rectangle will be drawn
    temp = pointAccumulator(element) //Did the player pass the obstacle?
    accrue += temp
    console.log(element.scoreRecorded)
    console.log(currentScore)
  })
  if (obstaclesArray.length > 10) {
    obstaclesArray.pop(obstaclesArray[0])
  }

  //Check bird-rectangle collision by checking edges
  //calculate the distance of each object to bird
  //calculate the distance of each object's corner to each bird
  return accrue;
}

function handleCollisions() {
  let xDistance = 0
  let yDistanceBot = 0
  let yDistanceTop = 0
  obstaclesArray.forEach((element) => {
    xDistance = element.xPosition()
    yDistanceBot = canvas.height - element.botHeight()
    yDistanceTop = element.topHeight()

    let xPosHarry = harry.xPosition()
    let yPosHarry = harry.yPosition()

    if (yPosHarry >= yDistanceBot && xPosHarry == xDistance) {
      //Game Over
      gamePlaying = false
    } else if (yPosHarry <= yDistanceTop && xPosHarry == xDistance) {
      //Game Over
      gamePlaying = false
    } else if (yPosHarry <= yDistanceTop && xPosHarry - 20 == xDistance) {
      //Game Over
      gamePlaying = false
    } else if (yPosHarry >= yDistanceBot && xPosHarry - 20 == xDistance) {
      //Game Over
      gamePlaying = false
    }
  })
}
