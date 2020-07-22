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
  context.fillStyle = "rgba(255, 255, 255, 0.1)";
  context.clearRect(0, 0, _W, _H);
  for (let p of window.particles) {
    p.update(context);
  }
};

const _main = () => {
  globalConfig();
  window.particles = [];
  for (let i = 0; i < 11; i++) {
    let color = randomColors(colors);
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, 4, color));
  }

  drawFrame();
};

_main();
