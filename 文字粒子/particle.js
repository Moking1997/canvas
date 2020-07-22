class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.vx = randomFrom(-_SpeedX, _SpeedX);
    this.vy = randomFrom(-_SpeedY, _SpeedY);
    this.basePosition = [x, y];
    this.radius = randomFrom(1.1, radius);
    this.breathSpeed = breathSpeed;
    this.radiusMax = radius;
    this.angle = 0;
    this.color = color || "#fff";
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    this.setRadius();
    switch (ParticleShape) {
      case 0:
        this.circle(ctx);
        break;
      case 1:
        this.rect(ctx);
        break;
      case 2:
        this.Rectangle(ctx);
        break;
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  circle(ctx) {
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
  }

  rect(ctx) {
    ctx.fillRect(this.x, this.y, this.radius, this.radius);
  }

  Rectangle(ctx) {
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.radius, this.y - this.radius * 2);
    ctx.lineTo(this.x + this.radius * 2, this.y);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  setRadius() {
    this.radius += this.breathSpeed;
    if (this.radius >= this.radiusMax) {
      this.radius = this.radiusMax;
      this.breathSpeed *= -1;
    } else if (this.radius <= 1) {
      this.radius = 1;
      this.breathSpeed *= -1;
      this.y = this.basePosition[1];
      this.x = this.basePosition[0];
      this.radiusMax = randomFrom(1, radiusValue);
    }
  }

  update(context) {
    this.move();
    this.draw(context);
  }
}
