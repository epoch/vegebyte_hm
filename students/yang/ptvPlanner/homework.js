console.log("Testing homework")

var alamein = ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"];
var glenWaverley = ["Flagstaff","Melbourne Central","Parliament","Richmond","Kooyong","Tooronga"];
var sandringham = ["Southern Cross","Richmond","South Yarra","Prahran","Windsor"];

var start = "Burnley";
var end = "Windsor";

// var start = prompt("Where are you boarding?");
// var end = prompt("Where are you heading?");

var alStartIndex = alamein.indexOf(start);
var alEndIndex = alamein.indexOf(end);

var glStartIndex = glenWaverley.indexOf(start);
var glEndIndex = glenWaverley.indexOf(end);

var saStartIndex = sandringham.indexOf(start);
var saEndIndex = sandringham.indexOf(end);

// var firstHalf = [];
// var secondHalf = [];

var length = function () {
  if (alStartIndex >= 0){
      if (alEndIndex >= 0){
        return Math.abs(alEndIndex - alStartIndex);
      } else if (glEndIndex >= 0){
        return Math.abs(alStartIndex - 1) + Math.abs(glEndIndex - 3);
      } else if (saEndIndex >= 0){
        return Math.abs(alStartIndex - 1) + Math.abs(saEndIndex - 1);
      }
  } else if (glStartIndex >= 0){
      if (glEndIndex >= 0){
        return Math.abs(glEndIndex - glStartIndex);
      } else if (alEndIndex >= 0){
        return Math.abs(glStartIndex - 3) + Math.abs(alEndIndex - 1);
      } else if (saEndIndex >= 0){
        return Math.abs(glStartIndex - 3) + Math.abs(saEndIndex - 1);
      }
  } else if (saStartIndex >= 0){
      if (saEndIndex >= 0){
        return Math.abs(saEndIndex - saStartIndex);
      } else if (alEndIndex >= 0){
        return Math.abs(saStartIndex - 1) + Math.abs(alEndIndex - 1);
      } else if (glEndIndex >= 0){
        return Math.abs(saStartIndex - 1) + Math.abs(glEndIndex - 3);
      }
  }
}

var firstTrip = function () {
  var firstHalf = [];
  if (alStartIndex >= 0){
      if (alEndIndex > 1){
        for (var i = alStartIndex; i <= alEndIndex; i++){
          var trip = firstHalf.push(alamein[i]);
        } console.log(trip)
      } else if (alStartIndex > 1){
        for (var i = alEndIndex; i >= alStartIndex; i--){
          var trip = firstHalf.push(alamein[i]);
        } console.log(trip)
      }
  } else if (glStartIndex >= 0){
      if (glEndIndex > 3){
        for (var i = glStartIndex; i <= glEndIndex; i++){
          firstHalf.push(glenWaverley[i]);
        }
      } else if (glStartIndex > 3){
        for (var i = glEndIndex; i >= glStartIndex; i--){
          firstHalf.push(glenWaverley[i]);
        }
      }
  } else if (saStartIndex >= 0){
      if (saEndIndex > 1){
        for (var i = saStartIndex; i <= saEndIndex; i++){
          firstHalf.push(sandringham[i]);
        }
      } else if (saStartIndex > 1){
        for (var i = saEndIndex; i >= saStartIndex; i--){
          firstHalf.push(sandringham[i]);
        }
      }
  }
  return firstHalf
}


var secondTrip = function () {
  var secondHalf = [];
  if (alEndIndex >= 0){
      if (alEndIndex > 1){
        for (var i = 1; i <= alEndIndex; i++){
          secondHalf.push(alamein[i]);
        }
      } else if (alEndIndex === 0){
        secondHalf.push(alamein[0]);
      }
  } else if (glEndIndex >=0) {
      if (glEndIndex > 3){
        for (var i = 3; i <= glEndIndex; i++){
          secondHalf.push(glenWaverley[i]);
        }
      } else if (alEndIndex < 3){
        for (var i = 3; i >= glEndIndex; i--){
          secondHalf.push(glenWaverley[i]);
        }
      }
  } else if (saEndIndex >= 0){
      if (saEndIndex > 1){
        for (var i = 1; i <= saEndIndex; i++){
          secondHalf.push(sandringham[i]);
        }
      } else if (saEndIndex === 0){
        secondHalf.push(sandringham[0]);
      }
  }
  return secondHalf
}

var journey1 = function () {
  for (var i = 0; i > firstTrip().length; i++) {
    console.log("Hello" + firstHalf);
    return firstTrip()[i] + " ===> ";
  }
};

var journey2 = function () {
  for (var i = 0; i > secondTrip().length; i++) {
    return secondTrip()[i] + " ===> ";
  }
};

var journey = journey1() + " ===> " + journey2();

console.log("Your trip is " + length() + " stops in length, passing the following: \n" + journey)
