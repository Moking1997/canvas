const globalConfig = () => {
  window.canvas = document.querySelector("#canvas");
  window.context = canvas.getContext("2d");

  window._W = canvas.width = window.innerWidth;
  window._H = canvas.height = window.innerHeight;
  window.colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];

  window.particles = [];
  window._ParticleSize = 4;
  window._WithinRadius = 70;
  window._OutsideRadius = 90;
  window._Speed = 0.01;
  window._DragSpeed = 0.05;
  window._DragShadow = 0.1;
};

const change = () => {
  for (let p of window.particles) {
    p.distance = randomFrom(_WithinRadius, _OutsideRadius);
    p.radius = _ParticleSize;
    p.speed = _Speed;
    p.dragSpeed = _DragSpeed;
  }
};

const globalControl = () => {
  // 按钮
  let btn = e("#btn");
  let control = e("#control");
  // 控制变量
  let speed = e("#speed");
  let dragSpeed = e("#dragSpeed");
  let dragShadow = e("#dragShadow");
  let particleSize = e("#particleSize");
  let withinRadius = e("#withinRadius");
  let outsideRadius = e("#outsideRadius");

  bindEvent(btn, "click", () => {
    control.classList.toggle("hide");
  });

  bindEvent(particleSize, "change", () => {
    _ParticleSize = parseFloat(particleSize.value);
    change();
  });
  bindEvent(withinRadius, "change", () => {
    _WithinRadius = parseFloat(withinRadius.value);
    change();
  });
  bindEvent(outsideRadius, "change", () => {
    _OutsideRadius = parseFloat(outsideRadius.value);
    change();
  });

  bindEvent(speed, "change", () => {
    _Speed = parseFloat(speed.value);
    change();
  });
  bindEvent(dragSpeed, "change", () => {
    _DragSpeed = parseFloat(dragSpeed.value);
    change();
  });
  bindEvent(dragShadow, "change", () => {
    _DragShadow = parseFloat(dragShadow.value);
  });
};

window.mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
const drawFrame = function () {
  window.requestAnimationFrame(drawFrame);
  context.fillStyle = `rgba(255, 255, 255,${window._DragShadow})`;
  context.fillRect(0, 0, _W, _H);
  for (let p of window.particles) {
    p.update(context);
  }
};

const _main = () => {
  globalConfig();
  globalControl();

  for (let i = 0; i < 50; i++) {
    let color = randomColors(colors);
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, _ParticleSize, color));
  }

  drawFrame();
};

_main();
