var origin = 'Richmond';
var destination = 'Flagstaff';
var hubStation = 'Richmond';

var alamein = ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'];
var glenWaverley = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'];
var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];

//Check if the stations are on the same line

var startingLine = function() {
  if (alamein.indexOf(origin) > -1) {
    console.log('origin is on alamein');
  } else if (glenWaverley.indexOf(origin) > -1) {
    console.log('origin is on glen waverley');
  } else {
    console.log('origin is on sandringham');
  }
};
var finishLine = function() {
  if (alamein.indexOf(destination) > -1) {
    console.log('origin is on alamein');
  } else if (glenWaverley.indexOf(destination) > -1) {
    console.log('origin is on glen waverley');
  } else {
    console.log('origin is on sandringham');
  }
};

//If they are, run the count
if (startingLine.toString() === finishLine.toString()) {
  console.log('they are on the same line');
} else {
  console.log('they are on different lines');
}
//else check to to see if they are on alamein and glen waverley

//check if it is sandringham and alamein

//check if it is sandringham and glen waverley

// Count from the origin to the Hub Station, from the Hub Station to the destination
