"use strict";

const main = document.querySelector("#main");
const result = document.querySelector("#result");
const qna = document.querySelector("#qna");

const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function begin() {
  main.style.webkitAnimate = "fadeOut 1s";
  main.style.animate = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animate = "fadeIn 1s";
    qna.style.webkitAnimate = "fadeIn 1s";
    setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
    }, 500);
  }, 500);
}
