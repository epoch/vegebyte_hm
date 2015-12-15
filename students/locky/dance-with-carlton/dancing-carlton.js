var movePixels = 10;
var delayMs = 50;
var danceTimer = null;

var img = document.getElementsByTagName('img')[0];

function danceWalk() {
  var currentLeft = parseInt(img.style.left);
  var currentRight = parseInt(img.style.right);

  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

var stopStartButton = document.getElementById('stop-start');
var speedUp = document.getElementById('dance-faster');
var speedDown = document.getElementById('dance-slower');

var dancing = false;

var stopStart = function() {
  if (dancing === false) {
    danceTimer = window.setInterval(danceWalk, delayMs);
    stopStartButton.innerHTML = "stop";
    dancing = true;
    var fasterDance = function() {
       danceTimer = window.setInterval(danceWalk, (delayMs * 1.5));
    }
    var slowerDance = function() {
       danceTimer = window.setInterval(danceWalk, (delayMs * -1.5));
    }
    speedUp.addEventListener('click', fasterDance);
    speedDown.addEventListener('click', slowerDance);
  } else {
    clearInterval(danceTimer);
    stopStartButton.innerHTML = "start";
    dancing = false;
  }
}

// function startDancing() {
//   danceTimer = window.setInterval(danceWalk, delayMs);
// }
// function danceFaster(){
//   danceTimer = window.setInterval(danceWalk, (delayMs * 1.5));
// }
// function stopDancing() {
//   clearInterval(danceTimer);
// }
//
// var startButton = document.getElementById('start-button');
// var speedButton = document.getElementById('speed-button');
// var stopButton = document.getElementById('stop-button');
//
// startButton.addEventListener('click', startDancing);
// speedButton.addEventListener('click', danceFaster);
// stopButton.addEventListener('click', stopDancing);


stopStartButton.addEventListener('click', stopStart);
