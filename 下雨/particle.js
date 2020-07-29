class Particle {
  constructor(x, y, radius, color) {
    this.x = randomFrom(1, x)
    this.y = randomFrom(1, y)
    this.radius = randomFrom(10, radius)
    this.color = color
    this.size = 3
    this.speed = 0.05
    this.bounces = []
  }

  draw(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.size
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + this.radius * _SpeedX, this.y + this.radius)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  move() {
    this.x += _SpeedY * _SpeedX
    this.y += _SpeedY
  }

  update(context) {
    this.move()
    for (let i = 0; i < this.bounces.length; i++) {
      const e = this.bounces[i]
      e.update()
    }
    this.draw(context)
  }
}

class Bounce {
  constructor(x, y) {
    let dist = Math.random() * 7
    let angle = Math.PI + Math.random() * Math.PI

    this.pos = {
      x: x,
      y: y,
    }
    this.radius = 0.2 + Math.random() * 5
    this.vel = {
      x: Math.cos(angle) * dist,
      y: - Math.sin(angle) * dist - 5
    }
  }
  update() {
    let gravity = 0.5
    this.vel.y += gravity
    this.vel.x *= 1.1
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.draw()
  }

  draw() {
    context.save()
    context.beginPath()
    context.lineWidth = 1;
    context.strokeStyle = "#fff";
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2)
    context.stroke();
    context.closePath()
    context.restore()
  }
}

