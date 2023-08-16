"use strict";

const main = document.querySelector("#main");
const result = document.querySelector("#result");
const qna = document.querySelector("#qna");
begin
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function addAnswer(answerText, qIdx) { // 답변 리스트 넘어가게 작동하기
  const a = document.querySelector('.answerBox');
  let answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  function goResult() {
    main.style.webkitAnimate = "fadeOut 1s";
    main.style.animate = "fadeOut 1s";
    setTimeout(() => {
      qna.style.animate = "fadeIn 1s";
      result.style.webkitAnimate = "fadeIn 1s";
    }, 450);

    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  }


  answer.addEventListener("click", function () {
    let children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.webkitAnimate = "fadeOut 1s";
      main.style.animate = "fadeOut 1s";
    }
    setTimeout(() => {
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 950)
  }, false);
}

function goNext(qIdx) { // qnaList안에 속성을 전부 가져옴 

  if (qIdx++ === endPoint) {
    goResult();
  }
  const q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  const status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() { // 화면 전환 함수
  main.style.webkitAnimate = "fadeOut 1s";
  main.style.animate = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animate = "fadeIn 1s";
    qna.style.webkitAnimate = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0; // 질문이 12번 출력되야하기 때문에 파라미터값으로 선언한다.
    goNext(qIdx);
  }, 450);
}
