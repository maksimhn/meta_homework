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

