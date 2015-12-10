// var sayHello = function(firstName, lastName) {
//   console.log("Hello " + firstName + " " + lastName);
// }

// var greeting = function(name) {
// return "hello " + name;
// }

// var magicNumber = 5;

// var printMagicNumber = function() {
//   console.log(magicNumber);
// }

// Array to extract stop data from
// var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
// var glenWaverleyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
// var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

// Variable to get max stop number
// var alaStops = alameinLine.length; // 6
// var glWaStops = glenWaverleyLine.length; // 6
// var sanStops = sandringhamLine.length; // 5

// going to use a for loop as I know what the max stops can be
// for () {
//   if (alameinLine.indexAt() - alaStops) { // Trying to create a way to make a value for the number between stops
//     return ;
//   }
// }

// for () {
//   if (glenWaverleyLine.indexAt() - glWaStops) { // Trying to create a way to make a value for the number between stops
//     return ;
//   }
// }

// for () {
//   if (sandinghamLine.indexAt() - sanStops) { // Trying to create a way to make a value for the number between stops
//     return ;
//   }
// }

// var alaLength = function() {
//   return alameinLine.indexAt() - alaStops; // Trying to create a way to make a value for the number between stops
// }

// var glWaLength = function() {
//   return glenWaverleyLine.indexAt() - alaStops; // Trying to create a way to make a value for the number between stops
// }

// var alaLength = function() {
//   return sandringhamLine.indexAt() - alaStops; // Trying to create a way to make a value for the number between stops
// }

// trying to create a function to enter stops, return a number. Am I picking up a value of the position in the array? 
// var logStops = function(getOn, getOff) {
//     if (getOff.indexAt() - getOn.indexAt() === true) {
//       console.log
//     }
// }

// logStops(alameinLine[0], alameinLine[3]);  
// add stops to get on and get off here
// tried (alameinLine[0], alameinLine[3]); but it didnt print anything in the console

var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverleyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var userStartLine = glenWaverleyLine; // user has to enter start & end lines & stations
var userEndLine = sandringhamLine; // sandringhamLine; alameinLine; glenWaverleyLine;

var userStartStation = "Flagstaff";
var userEndStation = "Windsor";

var userStartIndex = userStartLine.indexOf(userStartStation); //creating index's for stations
var userEndIndex = userEndLine.indexOf(userEndStation);
var userJourneyLength; // userStartIndex - userEndIndex

// Problem 1: Adding the length of the journey in stops together 
// userJourneyLength is coming up with a wrong answer, it's not taking into account the slice
// I need to be able to add the length of the two strings together

if (userStartLine === userEndLine) {
    userJourneyLength = userEndIndex - userStartIndex;
  } 
  else if (userStartLine === glenWaverleyLine && userEndLine === alameinLine || sandringhamLine) {
    userJourney =  (userEndStation.indexOf()) - (userStartStation.indexOf());
  }  
  // else if (userStartLine === alameinLine || sandringhamLine && userEndLine === glenWaverleyLine) {
  //   userJourney = userEndStation.indexOf() - userStartStation.indexOf(); 
  // }

// I tried 
// else if (userStartLine === glenWaverleyLine && userEndLine === alameinLine || sandringhamLine) {
//     userJourney = userStartStation.length + userEndStation.length; 
// This is undefined. It's not taking into account the input's place in the string and adding the two together

// I know the position of Richmond for all lines, so I need to find a way to use that to calculate how the lengths of
// the strings

// Problem 2: The concat is still not printing the two arrays together

/* Here I am working out the slice for changing lines and using concat to add them together. as Richmond is the same index
for alamein and sandringham, I can put them together */

var userJourney; 
  if (userStartLine === userEndLine) {
    userJourney = userStartLine.slice(userStartIndex, userEndIndex);
  } 
  else if (userStartLine === glenWaverleyLine && userEndLine === alameinLine || sandringhamLine) {
    userJourney = userStartLine.slice(userStartIndex, [4]).concat(userEndLine.slice([5], userEndStation)); 
  }  
  else if (userStartLine === alameinLine || sandringhamLine && userEndLine === glenWaverleyLine) {
    userJourney = userStartLine.slice(userStartIndex, [1]).concat(glenWaverleyLine.slice([2], userEndStation)); 
  }



// here I'm stating what to log, comparing the two lines that were entered

if (userStartLine === userEndLine) { // same line, it can't print straight away
  console.log("There are the following stations before you reach your destination " + userJourney);
  console.log("You will arrive in " + userJourneyLength + " stops.")

    // glenWaverley line has a different index for Richmond, so it has to be addressed separately
    if (userStartLine === glenWaverleyLine && userEndLine !== glenWaverleyLine) { 
      console.log("There are the following stations before you reach your destination " + userJourney);
      console.log("You will arrive in " + userJourneyLength + " stops.");
      console.log("Remember to change at stop 2, " + userStartLine[3]);
    } 
    // Richmond is [1] for Sandringham and Alamein, so it can be put together
    else if (userStartLine !== glenWaverleyLine && userStartLine !== userEndLine) {
      console.log("There are the following stations before you reach your destination " + userJourney);
      console.log("You will arrive in " + userJourneyLength + " stops");
      console.log("Remember to change at stop 2, " + userStartLine[1]);
    }
} 













