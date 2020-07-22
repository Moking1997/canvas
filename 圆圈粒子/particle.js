class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.theta = randomDoubleFromRange(0, 2 * Math.PI);
    this.speed = 0.05;
    this.distance = randomIntFromRange(70, 90);
    this.dragSpeed = 0.05;
    this.lastMouse = {
      x: x,
      y: y,
    };
  }

  draw(ctx, lastPosition) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  update(context) {
    let lastPosition = {
      x: this.x,
      y: this.y,
    };

    // 拖拽效果
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * this.dragSpeed;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * this.dragSpeed;
    // 1  x
    this.x = this.lastMouse.x + Math.cos(this.theta) * this.distance;
    this.y = this.lastMouse.y + Math.sin(this.theta) * this.distance;

    this.theta += this.speed;
    this.draw(context, lastPosition);
  }
}
