
console.log('** welcome to the journey planner. Enter your origin and destination');

//object containing all stations on the rail network.
var network = {
	'Alamein': ['Flinders St', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
	'Glen Waverly': ['Flagstaff', 'Melbourne Central', 'Pariament', 'Richmond', 'Kooyong', 'Tooroonga'],
	'Sandringham': ['Southern Cross', 'Richmond','South Yarra', 'Prahan', 'Windsor']
};

//hard coded for testing
// var origin = 'Windsor';
// var destination = 'Glenferrie';

//object.keys(network) creates an array from the line keys
//of network object. 1 array element for each line, used for line names
var linesArray = Object.keys(network); 

//function to search entire network for a given station, returns object with the station name, line and stop number
var getLine = function(station){
	//checks each line for a match, three match variables created.
	//-1 means no match found on the given train line
	var resultA = network['Alamein'].indexOf(station);
	var resultGW = network['Glen Waverly'].indexOf(station);
	var resultS = network['Sandringham'].indexOf(station);
	
	//if no match found, return error 
	if (resultA === -1 && resultGW === -1 && resultS === -1){
		console.log('Please enter a valid sation');
		return 'Invalid';
	}
	
	//if a match is found the line name is printed and object with name, line and stop number is returned
	else if (resultA >=0){
		console.log(station + ' is on the ' + linesArray[0] + ' line');
		return {
		Name : station,
		Stop : resultA,
		Line : network['Alamein'],
		lineName : linesArray[0]};
	}
	else if (resultGW >=0){
		console.log(station + ' is on the ' + linesArray[1] + ' line');
		return {
		Name : station,
		Stop : resultGW,
		Line : network['Glen Waverly'],
		lineName : linesArray[1]};
	}
	else { //(resultS >=0)
		console.log(station + ' is on the ' + linesArray[2] + ' line');
		return {
			Name : station,
			Stop : resultS,
			Line : network['Sandringham'],
			lineName : linesArray[2]};
	}
}

//FRONT ---------------

//button object
var jButton = document.getElementById('journeyButton');

//text box content
var orig = document.getElementById('origIn');
var dest = document.getElementById('destIn');

//function for button click
var pressButton = function(){

	//set titles to orig and dest
	var origDisp = document.getElementById('origDisplay');
	origDisp.innerHTML = (orig.value);
	var destDisp = document.getElementById('destDisplay');
	destDisp.innerHTML = (dest.value);

	//declare o and d variables and start the journey planner
	var origin = (orig.value);
	var destination = (dest.value);
	
	//display stations in console
	console.log(origin);
	console.log(destination);
	
	//call getLine for origin and destination, store info in variables
	var origInfo = getLine(origin);
	var destInfo = getLine(destination);
	
	//if orig and dest are on the same line:
	if ((origInfo.Line) === (destInfo.Line)){
		console.log('You don\'t need to change lines');
	
		//declare new journey array
		var journey = origInfo.Line;
	
		//if origin appears after the destination on the line, reverse the array
		if(origInfo.Stop > destInfo.Stop){
			//slice so only relevant stations appear
			var journeySlice = journey.slice((destInfo.Stop), (origInfo.Stop + 1));
			journeySlice = journeySlice.reverse();
		}
		else { //origin appears before the destination on the line
			var journeySlice = journey.slice((origInfo.Stop), (destInfo.Stop + 1));
		}
		console.log(journeySlice);
	}

	else {	//orig and dest on different lines
		console.log('You will need to change to the ' + (destInfo.lineName) + ' line at Richmond');

		//getTrip function accepts stationInfo object as a parameter
		//returns an array for the appropriate leg of the journey
		var getTrip = function (stationInfo){
			var tripArray = stationInfo.Line;

			//check orientation - make sure Richmond comes first in the array returned by getTrip
			//slice the stops that aren't between the station and Richmond
			if (tripArray.indexOf('Richmond') > stationInfo.Stop){
				var tripSlice = tripArray.slice((stationInfo.Stop), (tripArray.indexOf('Richmond') +1));
				tripSlice = tripSlice.reverse();
				return tripSlice;
			}
			else {
				var tripSlice = tripArray.slice((tripArray.indexOf('Richmond')), ((stationInfo.Stop)+1));
				return tripSlice;
			}
		}

		var leg1 = getTrip(origInfo).reverse();	//first leg reversed so Richmond is the last value
		var leg2 = getTrip(destInfo);
		leg2.reverse();
		leg2.pop(); //Richmond(first value) removed from second leg
		leg2.reverse();
	
		console.log('Take the ' + origInfo.lineName + ' Line to Richmond via the following stations: ' + leg1);
		console.log('at Richmond, take the ' + destInfo.lineName + ' Line to ' + destination + ' via: '+  leg2);
	}
}
//click listener. calls pressButton function when button clicked
jButton.addEventListener('click', pressButton);










