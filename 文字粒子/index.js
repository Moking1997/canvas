const globalConfig = () => {
  window.canvas = document.querySelector("#canvas");
  window.context = canvas.getContext("2d");
  window.shape = new Shape("O(∩_∩)O");

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

  window.wordValue = "O(∩_∩)O";
  window.ParticleShape = 0;
  window.radiusValue = 5;
  window.breathSpeed = 0.15;
  window._SpaceX = 7;
  window._SpaceY = 7;
  window._SpeedX = 0;
  window._SpeedY = 0;
};

const globalControl = () => {
  // 按钮
  let btn = e("#btn");
  let control = e("#control");
  let shapes = es(".shape");
  // 控制变量
  let word = e("#word");
  let breath = e("#breath");
  let radius = e("#radius");
  let spaceX = e("#spaceX");
  let spaceY = e("#spaceY");
  let speedX = e("#speedX");
  let speedY = e("#speedY");
  let text = "O(∩_∩)O";

  for (let i = 0; i < shapes.length; i++) {
    const element = shapes[i];
    bindEvent(element, "click", () => {
      removeClassAll("shape-active");
      element.classList.toggle("shape-active");
      ParticleShape = i;
    });
  }

  bindEvent(btn, "click", () => {
    control.classList.toggle("hide");
  });
  bindEvent(word, "change", () => {
    text = word.value;
    change(text);
  });
  bindEvent(breath, "change", () => {
    breathSpeed = parseFloat(breath.value);
    change(text);
  });
  bindEvent(radius, "change", () => {
    radiusValue = parseFloat(radius.value);
  });
  bindEvent(spaceX, "change", () => {
    _SpaceX = parseFloat(spaceX.value);
    change(text);
  });
  bindEvent(spaceY, "change", () => {
    _SpaceY = parseFloat(spaceY.value);
    change(text);
  });
  bindEvent(speedX, "change", () => {
    _SpeedX = parseFloat(speedX.value);
    change(text);
  });
  bindEvent(speedY, "change", () => {
    _SpeedY = parseFloat(speedY.value);
    change(text);
  });
  window.addEventListener("resize", () => {
    _W = canvas.width = window.innerWidth;
    _H = canvas.height = window.innerHeight;
    change(text);
  });
};

const change = (word) => {
  context.clearRect(0, 0, _W, _H);
  shape.textZone = [];
  shape.text = word;
  shape.getValue(context);
};

const drawFrame = function () {
  window.requestAnimationFrame(drawFrame);
  context.clearRect(0, 0, _W, _H);
  for (var i = 0; i < shape.textZone.length; i++) {
    shape.textZone[i].update(context);
  }
};

const _main = () => {
  globalConfig();
  globalControl();
  shape.getValue(context);

  drawFrame();
};

_main();
