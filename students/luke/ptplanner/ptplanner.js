

//FRONT END ---------------

//button objects
var oButton = document.getElementById('origButton');
var dButton = document.getElementById('destButton');

//text box content
var orig = document.getElementById('origIn');
var dest = document.getElementById('destIn');

//functions for button clicks
var enterOrig = function(){
	var origDisp = document.getElementById('origDisplay');
	origDisp.innerHTML = (orig.value);
}
var enterDest = function(){
	var destDisp = document.getElementById('destDisplay');
	destDisp.innerHTML = (dest.value);
}

//click listener. calls function when button clicked
oButton.addEventListener('click', enterOrig);
dButton.addEventListener('click', enterDest);

//-----------------------
console.log('** welcome to the journey planner. Enter your origin and destination');

//object containing all stations on the rail network.
var network = {
	'Alamein': ['Flinders St', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
	'Glen Waverly': ['Flagstaff', 'Melbourne Central', 'Pariament', 'Richmond', 'Kooyong', 'Tooroonga'],
	'Sandringham': ['Southern Cross', 'Richmond','South Yarra', 'Prahan', 'Windsor']
}

var origin = 'South Yarra';
var destination = 'East Richmond';

//object.keys(network) creates an array from the line keys
// in network object. 1 array element for each line
var linesArray = Object.keys(network); 


console.log(origin);
console.log(destination);

//function to search network for a station
var searchLines = function(station){
	var resultA = network['Alamein'].indexOf(station);
	if (resultA >=0){
		console.log(station + ' is on the ' + linesArray[0] + ' line');
	}
	var resultGW = network['Glen Waverly'].indexOf(station);
	if (resultGW >=0){
		console.log(station + ' is on the ' + linesArray[1] + ' line');
	}
	var resultS = network['Sandringham'].indexOf(station);
	if (resultS >=0){
		console.log(station + ' is on the ' + linesArray[2] + ' line');
	}
	
}

searchLines(origin);
searchLines(destination);




