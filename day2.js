const input = require("./day2.input");

let sum = 0;

const setNewMinimum = (game, fewestCubes) => (color) => {
  if (game[color] > fewestCubes[color]) {
    fewestCubes[color] = game[color];
  }
};

const getFewestCubes = (games) => {
  const fewestCubes = {
    red: 0,
    blue: 0,
    green: 0,
  };
  games.forEach((game) => {
    const setWith = setNewMinimum(game, fewestCubes);
    setWith("red");
    setWith("blue");
    setWith("green");
  });
  return fewestCubes.red * fewestCubes.blue * fewestCubes.green;
};

const parseString = (string) => (key) => {
  const [subStr] = string.split(key);
  const intermediate = subStr.split(" ");
  const numStr = intermediate[intermediate.length - 1];
  return isNaN(numStr) ? 0 : +numStr;
};

const parseInput = (row) => {
  // "1: 4 green, 3 blue, 11 red; 7 red, 5 green, 10 blue; 3 green, 8 blue, 8 red; 4 red, 12 blue; 15 red, 3 green, 10 blue",
  const [rowNum, rowContent] = row.split(": ");
  const grabs = rowContent.split("; ");
  const parsedGrabs = [];
  grabs.forEach((grab) => {
    // '4 green, 3 blue, 11 red'
    const parser = parseString(grab);
    const parsedGrab = {
      red: parser(" red"),
      green: parser(" green"),
      blue: parser(" blue"),
    };
    parsedGrabs.push(parsedGrab);
  });
  return getFewestCubes(parsedGrabs);
};

input.forEach((game) => {
  sum += parseInput(game);
});

console.log(sum);
