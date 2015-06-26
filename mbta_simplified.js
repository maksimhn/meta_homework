var stops = {
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  green: ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  orange:["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

var stopsTillPark = function (line, stop) {
  var indexOfPark, indexOfStop;
  for (var i = 0; i < stops[line].length; i++) {
    if (stops[line][i] === stop) {
      indexOfStop = i;
    } else if (stops[line][i] === "park st") {
      indexOfPark = i;
    }
  }
  return (indexOfStop - indexOfPark) > 0 ? (indexOfStop - indexOfPark) : (indexOfPark - indexOfStop);
};

var stopsIfSameLine = function (startLine, startStop, endStop) {
  var indexOfStop, indexOfStart;
  for (var i = 0; i < stops[startLine].length; i++) {
    if (stops[startLine][i] === startStop) {
      indexOfStart = i;
    } else if (stops[startLine][i] = endStop) {
      indexOfStop = i;
    }
  }
  return (indexOfStop - indexOfStart) > 0 ? (indexOfStop - indexOfStart) : (indexOfStart - indexOfStop);
};


var numStops = function (startLine, startStop, endLine, endStop) {
  if (startLine === endLine) {
    return stopsIfSameLine(startLine, startStop, endStop);
  } else {
    return stopsTillPark(startLine, startStop) + stopsTillPark(endLine, endStop);
  }
};
