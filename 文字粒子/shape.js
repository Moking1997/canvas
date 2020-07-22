class Shape {
  constructor(text) {
    this.x = 0;
    this.y = 0;
    this.size = 150;
    this.text = text;
    this.textZone = [];
  }

  getValue(ctx) {
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = this.size + "px arial";
    ctx.fillText(this.text, canvas.width / 2, canvas.height / 2);
    ctx.restore();

    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let buffer32 = new Uint32Array(imgData.data.buffer);
    for (let i = 0; i < canvas.width; i += _SpaceX) {
      for (let j = 0; j < canvas.height; j += _SpaceY) {
        if (buffer32[canvas.width * j + i]) {
          let color = colors[Math.floor(Math.random() * colors.length)];
          let particle = new Particle(i, j, radiusValue, color);
          this.textZone.push(particle);
        }
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
