"use strict";




const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", function () {
  // Kiểm tra trạng thái của nút "No"
  if (noButton.disabled) {
    handleYesClick();
  }
});

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
      disableNoButton();
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Ich mag dich auch. Sei mein Valentinsschatz &#10084!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Cậu có chắc rằng không thích tớ không?",
    "Thật sự luôn á hở :(",
    "Nhưng mà tớ thích cậu mà",
    "Du machst mich so traurig",
    "Ich möchte so sehr weinen...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function disableNoButton() {
  noButton.disabled = true;
}

document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('myAudio');
  
  // Chọn phút và giây cần phát
  var targetMinute = 0; // Ví dụ: phát từ phút thứ 2
  var targetSecond = 10; // Ví dụ: phát từ giây thứ 30

  // Chuyển đổi thời gian cần phát thành giây
  var targetTimeInSeconds = (targetMinute * 60) + targetSecond;

  // Đặt thời gian phát
  audio.currentTime = targetTimeInSeconds;

  // Bắt đầu phát
  audio.play();
});