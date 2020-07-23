// 自定义 log 函数
const log = console.log.bind(console);
// 自定义的选择器函数
const e = (selector) => document.querySelector(selector);
const es = (selector) => document.querySelectorAll(selector);
// 预设DOM操作
const appendHtml = function (element, html) {
  element.insertAdjacentHTML("beforeend", html);
};
const bindEvent = function (element, eventName, callback) {
  element.addEventListener(eventName, callback);
};
//删除所有元素含有的classname属性
const removeClassAll = function (className) {
  let selector = "." + className;
  let elements = document.querySelectorAll(selector);
  for (let i = 0; i < elements.length; i++) {
    let e = elements[i];
    e.classList.remove(className);
  }
};
const randomFrom = (start, end) => {
  return start + Math.random() * (end - start);
};

const randomColors = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};
