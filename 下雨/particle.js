class Particle {
  constructor(x, y, radius, color) {
    this.x = randomFrom(1, x);
    this.y = randomFrom(1, y);
    this.radius = radius;
    this.color = color;
    this.size = 3;
    this.theta = randomFrom(0, 2 * Math.PI);
    this.speed = 0.05;
    this.distance = randomFrom(_WithinRadius, _OutsideRadius);
    this.dragSpeed = 0.05;
    this.direction = (mouse.x - _W / 2) / (_W / 2);
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.radius * _SpeedX, this.y + this.radius);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  move() {
    this.x += _SpeedY * _SpeedX;
    this.y += _SpeedY;
  }

  update(context) {
    this.move();
    // let lastPosition = {
    //   x: this.x,
    //   y: this.y,
    // };

    // // 拖拽效果
    // this.lastMouse.x += (mouse.x - this.lastMouse.x) * this.dragSpeed;
    // this.lastMouse.y += (mouse.y - this.lastMouse.y) * this.dragSpeed;

    // this.x = this.lastMouse.x + Math.cos(this.theta) * this.distance;
    // this.y = this.lastMouse.y + Math.sin(this.theta) * this.distance;

    // this.theta += this.speed;
    this.draw(context);
  }
}
