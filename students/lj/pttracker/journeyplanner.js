console.log("Wat the fck");

var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];

// var glenwaverlyLine [
// 'Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga'];

// var sandringhamline [
// 'Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];


// make a subset of the line array that makes a new array that has 
// only the stations from start station to finish station, using one of the 
// array functions, like splice or whatever it is. 


// Hardcoded input from user
var startStation = 'Flinders Street';
var endStation = 'Hawthorn';


// the index number is then returned. Need to capture it. 
var startStationIndex = alameinLine.indexOf(startStation);
var endStationIndex = alameinLine.indexOf(endStation); 



var journeyPlan = alameinLine.slice( startStationIndex, endStationIndex );

console.log("You will travel from " + journeyPlan)