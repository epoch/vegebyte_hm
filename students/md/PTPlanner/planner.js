var inputOrigin = document.getElementById('org-text');
var inputDest = document.getElementById('dest-text');
var journeyPlnButton = document.getElementById('journey-path');

var trainLines = [
	['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'],
	['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'],
	['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
];


var checkStation = function(Orig,Dest) {

	for(i=0; i<trainLines.length; i++) {
		for(j=0; j<trainLines[i].length; j++) {
			if(Orig == trainLines[i][j]) {
				var countOrg = 1;
			}
			if(Dest == trainLines[i][j]) {
				var countDest = 1;
			}
		}
	}

	if(countOrg === countDest) {
		
		return true;
	}

}
//function to locate stations in a line
function whereIs(Station) {

var row;
var col;

	for(row=0; row<trainLines.length; row++) {
		for(col=0; col<trainLines[row].length; col++) {
			if (Station === trainLines[row][col]) {
				return row;
			}
		}
	}
}

//plan the journey
function journeyPlan() {

	var origin = inputOrigin.value;
	var destination = inputDest.value;

	if(checkStation(origin,destination))	{

	var rowOrigin;
	var rowDest;

	rowOrigin= whereIs(origin);
	rowDest= whereIs(destination);

	var colOrigin = trainLines[rowOrigin].indexOf(origin);
	var colDest = trainLines[rowDest].indexOf(destination);

	var nodeOrg = trainLines[rowOrigin].indexOf('Richmond');
	var nodeDest = trainLines[rowDest].indexOf('Richmond');

	var path = [];
		//Origin and Destination lies on same line
		if (rowOrigin == rowDest) {
			//backwards journey
			if(colOrigin > colDest) {
				for(var i=colOrigin; i>=colDest; i--) {
					path.push(trainLines[rowOrigin][i]);
				}

			}
			//normal forward journey
			else {
			 path = trainLines[rowOrigin].slice(colOrigin,colDest+1);
			}
		}
		//Origin and Destination lies on different lines
		else {
			//first part of the journey
			///starting station comes after intersection
			if(colOrigin>nodeOrg) {
				for(var j=colOrigin; j>nodeOrg; j--) { 
					path.push(trainLines[rowOrigin][j]);
				}
			}
			///starting station comes before intersection
			else {
				for(var j = colOrigin; j<nodeOrg; j++) {
					path.push(trainLines[rowOrigin][j]);
					}
				}

			//second part of the journey
			if(colDest>nodeDest) {
					for(var k=nodeDest; k<=colDest; k++) {
						path.push(trainLines[rowDest][k]);
					}
				}
				
				else {
					for(var k=nodeDest; k>=colDest; k--) {
						path.push(trainLines[rowDest][k]);
					}

				}
			}

			//print complete path
			for(var l=0; l<=path.length-1; l++) {
				if(l == 0) {
					var printLine = path[l];
				}
				else {
					printLine = printLine + ' ---> ' + path[l];
				}
				
			}
			document.getElementById("journey-plan").innerHTML = printLine;
			
			document.getElementById("total-stops").innerHTML = path.length-1 + ' stops total.';
	}
	else {

		console.log("There is no train running between the stations you selected");
	}
}

journeyPlnButton.addEventListener('click', journeyPlan);



