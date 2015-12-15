var movePixels = 10;
var delayMs = 50;
var danceTimer = null;

var img = document.getElementsByTagName('img')[0];

var startButton = document.getElementById('start-button');
var speedUpButton = document.getElementById('speed-up-button');
var speedDownButton = document.getElementById('speed-down-button');
var stopButton = document.getElementById('stop-button');

function danceWalk() {
  var currentLeft = parseInt(img.style.left);
  var currentRight = parseInt(img.style.right);

  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startDancing() {
  clearInterval(danceTimer);
  danceTimer = window.setInterval(danceWalk, delayMs);
  console.log('start ' + danceTimer);
  console.log(movePixels);
}
function danceFaster(){
  movePixels = movePixels + 10;
  console.log('faster ' + danceTimer);
  console.log(movePixels);
}
// function danceSlower(){
//   movePixels = movePixels + (-10);
//   console.log('faster ' + danceTimer);
//   console.log(movePixels);
// }
function stopDancing() {
  window.clearInterval(danceTimer);
  movePixels = 10;
  console.log('stop ' + danceTimer);
  console.log(movePixels);
}

startButton.addEventListener('click', startDancing);
speedUpButton.addEventListener('click', danceFaster);
// speedDownButton.addEventListener('click', danceFaster);
stopButton.addEventListener('click', stopDancing);
