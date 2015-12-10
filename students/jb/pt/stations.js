var melbourneLines = {
  'Alamein': ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  'Glen Waverly': ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham': ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var findTrainLine = function(lines, station) {
    var lineNames = Object.keys(lines);
    var foundLines = [];
    for (var i = 0; i < lineNames.length; i++) {
        // for each line check station names for match ofinput station
        var currLine = lines[lineNames[i]];
        for (var j = 0; j < currLine.length; j++) {
            if (currLine[j] === station) {
                foundLines.push(lineNames[i]);
            }
        }
    }
    if (foundLines.length) {
      return foundLines;
    } else {
      console.log('Station not found in list of available stations');
    }
};

var checkSingleLine = function(originLines, destLines) {
  // check the collection of destination lines against origin lines
  // if journey can be completed on a single line.
  for (var i = 0; i < originLines.length; i++) {
    for (var j = 0; j < destLines.length; j++) {
      // any match can return immediately
      // cases where matches exist should be:
      // both stations exist on one line;
      // one of the stations is richmond;
      // both of the stations are richmond (the stupid traveller case);
      if (originLines[i] === destLines[j]) {
        // if there is a match return the line matched on
        return originLines[i];
      }
    }
  }
  // all possible line combinations tried, no match, therefore a change needed
  return false;
};

var travelFrom = function(lines, travelLine, origin, destination) {
  // check direction of travel and return an array result of stations travelled
  // from the origin station to the destination.
  var currLine = lines[travelLine];
  var stations = [];
  var originInd = currLine.indexOf(origin);
  var destInd = currLine.indexOf(destination);
  /*console.log('Origin of travel is:' + origin + ' with index: ' + originInd);
  console.log('Destination of travel is:' + destination + ' with index: ' + destInd);
  console.log('Traveling on line: ' + travelLine);*/
  if (originInd < destInd) {
    for (var i = originInd; i <= destInd; i++) {
      stations.push(currLine[i]);
    }
  } else {
    for (var i = originInd; i >= destInd; i--) {
      stations.push(currLine[i]);
    }
  }
  return stations;
};

var planRoute = function(lines, origin, destination) {
  var originLines = findTrainLine(lines, origin);
  var destinationLines = findTrainLine(lines, destination);
  var hubStation = 'Richmond';
  console.log(' ');
  console.log(' ');
  console.log('------------------------------------');
  console.log('    FatDavo\'s Trip Planner')
  console.log('Planning journey from ' + origin + ' station to ' + destination + ' station.');
  var firstLineStations = [];
  var secondLineStations = [];
  // check to see if needing to change trains
  console.log('------------------------------------');
  console.log('Checking route for line changes...');
  var travelSingleLine = checkSingleLine(originLines, destinationLines);
  if (travelSingleLine) {
    console.log('Good news you don\'t need to change trains...');
    console.log('Travelling on the ' + travelSingleLine + ' line visit the following stations:');
    firstLineStations = travelFrom(lines, travelSingleLine, origin, destination);
    console.log(firstLineStations.join(' ---> '));
  } else {
    console.log('Unfortunately you will need to change lines this trip...');
    console.log('Travelling on the ' + originLines[0] + ' line visit the following stations:');
    firstLineStations = travelFrom(lines, originLines[0], origin, hubStation);
    console.log(firstLineStations.join(' ---> '));
    console.log('Then changing at ' + hubStation + ' visit the following stations:')
    secondLineStations = travelFrom(lines, destinationLines[0], hubStation, destination);
    console.log(secondLineStations.join(' ---> '));
  }
  console.log('------------------------------------');
};

// test cases
// different lines must change.
planRoute(melbourneLines, 'Prahran', 'Hawthorn');
// same line but destination station is richmond.
planRoute(melbourneLines, 'Southern Cross', 'Richmond');
// same line but origin station is richmond.
planRoute(melbourneLines, 'Richmond', 'Hawthorn');
// same line no need to change.
planRoute(melbourneLines, 'Prahran', 'Southern Cross');
