// variable that sets how many pixels the image moves per interval
var movePixels = 10;
// the time in ms between intervals
var delayMs = 50;
// intial value of the the intervals
var danceTimer = null;
// variable to control the movements of the image back and forth
var goRight = true;

// grabs the first image in the html
var img = document.getElementsByTagName('img')[0];

// js button links
var startButton = document.getElementById('start-button');
var speedUpButton = document.getElementById('speed-up-button');
var speedDownButton = document.getElementById('speed-down-button');
var stopButton = document.getElementById('stop-button');

// dancing function
function danceWalk() {
  // grabs the left hand offest of the image
  var currentLeft = parseInt(img.style.left);
  // the new left hand side of the iamge equals the intial values, plus the amount of pixels moved, to get a new currentLeft value.
  img.style.left = (currentLeft + movePixels) + 'px';
  // move right
  if (goRight) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
  //move left
    img.style.left = (currentLeft - movePixels) + 'px';
  }

  if (goRight === true && currentLeft > (window.innerWidth-img.width)) {
    goRight = false;
  } else if (goRight === false && currentLeft < 0) {
    goRight = true;
  }

}

function startDancing() {
  if (danceTimer !== null) {
    return;
  }
  danceTimer = window.setInterval(danceWalk, delayMs);
  console.log('start ' + danceTimer);
  console.log(movePixels);
}
function danceFaster(){
  movePixels = movePixels + 2;
  // delayMs = delayMs - 10;
  console.log('faster ' + danceTimer);
  console.log(movePixels);
}
function danceSlower(){
  clearInterval(danceTimer);
  movePixels = movePixels - 2;
  console.log('faster ' + danceTimer);
  console.log(movePixels);
}
function stopDancing() {
  clearInterval(danceTimer);
  danceTimer = null;
  movePixels = 10;
  console.log('stop ' + danceTimer);
  console.log(movePixels);
}

startButton.addEventListener('click', startDancing);
speedUpButton.addEventListener('click', danceFaster);
speedDownButton.addEventListener('click', danceFaster);
stopButton.addEventListener('click', stopDancing);
