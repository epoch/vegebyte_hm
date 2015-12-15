function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

// var stopStartButton = document.getElementById('stop-start');
// var speedUp = document.getElementById('dance-faster');
// var speedDown = document.getElementById('dance-slower');
//
// var dancing = false;
//
// stopStartButton.innerHTML = "start";

// var stopStart = function() {
//   clearInterval(danceTimer);
//   if (dancing === false) {
//     danceTimer = window.setInterval(danceWalk, delayMs);
//     stopStartButton.innerHTML = "stop";
//     dancing = true;
//     var fasterDance = function() {
//        danceTimer = window.setInterval(danceWalk, delayMs++);
//     }
//     var slowerDance = function() {
//       danceTimer = window.setInterval(danceWalk, delayMs--);
//     }
//     speedUp.addEventListener('click', fasterDance);
//     speedDown.addEventListener('click', slowerDance);
//   } else {
//     danceTimer = window.setInterval(danceWalk, 0);
//     // danceTimer = null;
//     stopStartButton.innerHTML = "start";
//     dancing = false;
//   }
//   console.log(dancing);
//   console.log(danceTimer);
// }

// stopStartButton.addEventListener('click', stopStart);
