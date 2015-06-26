var red = ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"];
var green = ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"];

var orange = ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"];

var find = function (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return i;
    }
  }
  return -1;
};

var sameLineDistance = function (line, firstStop, secondStop) {
  // find the indices of first and second stop and subtract them
  var diff = find(line, firstStop) - find(line, secondStop);
  if (diff <0) {
    diff *= -1;
  }
  return diff;
  // ternary operator:
  // (diff > 0) ? diff : -diff;
};

var tester = function () {
  console.log("find");
  console.log("* should return 2, actually returns " + find(['a', 'b', 'c'], 'c'));
  console.log("* should return -1, actually returns " + find(['a', 'b', 'c'], 'z'));
  console.log("sameLineDistance");
  console.log("should return 1, actually returns " + sameLineDistance(red, "south station", "park st"));
};
