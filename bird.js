class Harry {
  constructor() {
    this.x = 150
    this.y = 200
    this.vy = 0
    this.width = 20
    this.height = 20
    this.weight = 1
  }
  update() {
    if (this.y > canvas.height - this.height * 3) {
      this.y = canvas.height - this.height * 3
      this.vy = 0
    } else {
      this.vy += this.weight
      this.vy *= 0.95 //velocity in y direction
      this.y += this.vy
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height
      this.vy = 0
    }
    if (spacePressed) this.flap()
  }
  draw() {
    ctx.fillStyle = 'red'
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      harryPotterPNG,
      this.x - 14,
      this.y - 10,
      this.width * 2,
      this.height * 2
    )
  }
  flap() {
    this.vy -= 2
  }
  xPosition() {
    return this.x
  }
  yPosition() {
    return this.y
  }
  sideLength() {
    return this.width
  }
}
const harry = new Harry()
