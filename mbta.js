// #Title: MBTA Homework

// ## Objectives:
// - Practice with with functions, arrays, and properties of an object literal.

// ## Activity:

// - Create a function to caclulate the number of stop between stations on the "MBTA". Right sub-functions as needed.
// - The function takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and **returns the total number of stops for the trip**.
// - There are 3 subway lines:
//  - The Red line has the following stops: south station, park st, kendall, central, harvard, porter, davis, alewife
//  - The Green line has the following stops: haymarket, government center, park st, bolyston, arlington, copley
//  - The Orange line has the following stops:  north station, haymarket, park st, state, downtown crossing, chinatown, back bay, forest hills
//  - All 3 subway lines intersect at *park st*, but there are no other intersection points. Some of this MBTA is fictionalized. haymarket does not connect the orange/green lines.

// ### Hints:

// * Assume good input.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * Subway lines are properties in an object literal, while the values are an array of all the stops on each line.
// * The key to the lab is to find the __intersection__ of the lines at *park st*.
// * Solve an easier problem first.


var stops = {
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  green: ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  orange:["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

// declaring a function that calculates the amount of stops from a given station to a cross station
var stopsTillPark = function (line, stop) {
  return Math.abs(stops[line].indexOf(stop) - stops[line].indexOf("park st"));
};

// a main function; data must be input as strings
var numStops = function (startLine, startStop, endLine, endStop) {
  // checking if the line is the same
  if (startLine === endLine) {
    return Math.abs(stops[startLine].indexOf(startStop) - stops[endLine].indexOf(endStop));
  }
  // if it isn't, we call the stopsTillPark twice and find the sum of stops from both lines to the cross station
  return stopsTillPark(startLine, startStop) + stopsTillPark(endLine, endStop);
};
