var red = ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"];
var green = ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"];

var orange = ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"];

var find = function (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

var sameLineDistance = function (line, firstStop, secondStop) {
  // find the indices of first and second stop and subtract them
  var diff = find(line, firstStop) - find(line, secondStop);
  if (diff < 0) {
    diff *= -1;
  }
  return diff;
  // ternary operator:
  // (diff > 0) ? diff : -diff;
};



var distance = function(firstLine, firstStop, secondLine, secondStop) {
  // Same-line case
  if (firstLine === secondLine) {
    return sameLineDistance(firstLine, firstStop, secondStop);
  } else { // Different-lines case
    return sameLineDistance(firstLine, firstStop, "park st") +
           sameLineDistance(secondLine, secondStop, "park st");
  }
};



var tester = function () {
  console.log("find");
  console.log("* should return 2, actually returns " + find(['a', 'b', 'c'], 'c'));
  console.log("* should return -1, actually returns " + find(['a', 'b', 'c'], 'z'));
  console.log("sameLineDistance");
  console.log("should return 1, actually returns " + sameLineDistance(red, "south station", "park st"));
  console.log("distance");
  console.log("should return 2, actually returns " + distance(red, "harvard", red, "kendall"));
  console.log("should return 5, actually returns " + distance(red, "harvard", green, "arlington"));
  console.log("should return 3, actually returns " + distance(green, "copley", orange, "park st"));
};

tester();
