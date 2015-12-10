var origin = 'Windsor';
var destination = 'Kooyong';
var hubStation = 'Richmond';

var alamein = ['Flinders Street',hubStation,'East Richmond','Burnley','Hawthorn','Glenferrie'];
var glenWaverley = ['Flagstaff','Melbourne Central','Parliament', hubStation,'Kooyong','Tooronga'];
var sandringham = ['Southern Cross', hubStation,'South Yarra','Prahran','Windsor'];

//Alamein and Glen Waverley Array
var alaGlen = alamein.concat(glenWaverley);
//Sandringham and Alamein array
var sanAla = sandringham.concat(alamein);
//Glen Waverley and Sandringham array
var glenSan = glenWaverley.concat(sandringham);

console.log(alaGlen);
// console.log(sanAla);
// console.log(glenSan);

console.log(alaGlen.indexOf(origin));

// Are the origin and destination on the same line?

if (alaGlen.indexOf(origin) > -1 && alaGlen.indexOf(destination) > -1) {
    console.log('in the alamein/glen waverley array');
//count from origin to hub station.
    if (origin > hubStation) {
      var firstTrip = function() {
        for (var i = 0; origin > hubStation; i--) {
          for (var j = 0; hubStation > destination; )
      }
    }
  }
    //count from hub station to destination
} if (sanAla.indexOf(origin) > -1 && sanAla.indexOf(destination) > -1) {
    console.log('in the sandringham/alamein array');
    //count from origin to hub station.

    //count from hub station to destination
} if (glenSan.indexOf(origin) > -1 && glenSan.indexOf(destination) > -1) {
    console.log('in the glen waverley/sandringham array');
    //count from origin to hub station.

    //count from hub station to destination
}

console.log(alamein.indexOf(hubStation));
console.log(glenWaverley.indexOf(hubStation));
console.log(sandringham.indexOf(hubStation));

// Count from the origin to the Hub Station, from the Hub Station to the destination
