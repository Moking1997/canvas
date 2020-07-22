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
    ctx.fillText(this.text, _W / 2, _H / 2);
    ctx.restore();

    let imgData = ctx.getImageData(0, 0, _W, _H);

    let buffer32 = new Uint32Array(imgData.data.buffer);
    for (let i = 0; i < _W; i += _SpaceX) {
      for (let j = 0; j < _H; j += _SpaceY) {
        if (buffer32[_W * j + i]) {
          let color = colors[Math.floor(Math.random() * colors.length)];
          let particle = new Particle(i, j, radiusValue, color);
          this.textZone.push(particle);
        }
      }
    }
    ctx.clearRect(0, 0, _W, _H);
  }
}
