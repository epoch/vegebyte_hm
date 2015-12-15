var movePixels = 10;
var delayMs = 50;
var catTimer = null;

var img = document.getElementsByTagName('img')[0];

function catWalk() {
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

var startButton = document.getElementById('start-button');
var speedButton = document.getElementById('speed-button');
var stopButton = document.getElementById('stop-button');

startButton.addEventListener('click', startCatWalk);
speedButton.addEventListener('click', catWalk);
stopButton.addEventListener.off('click');
