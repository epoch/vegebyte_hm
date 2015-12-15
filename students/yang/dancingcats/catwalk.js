var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var start = document.getElementById('start-button');
var speed = document.getElementById('speed-button');
var stop = document.getElementById('stop-button');

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    movePixels = -10;
  } else if (currentLeft < 0) {
    movePixels = 10;
  }
}

function startCatWalk() {
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, 200);
}

function fasterCatWalk() {
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, 80);
}

function stopCatWalk() {
    clearInterval(catTimer);
}

start.addEventListener("click", startCatWalk);
speed.addEventListener("click", fasterCatWalk);
stop.addEventListener("click", stopCatWalk);
