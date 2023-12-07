const input = require("./input");
const fs = require("node:fs");

const printer = (value) => {
  let text = value;
  if (typeof text !== "string") {
    text = JSON.stringify(value);
  }
  fs.appendFile("output.log", `${text}\n`, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const parseInput = (input) =>
  input.split("\n").map((each) => {
    const [hand, bid] = each.split(" ");
    return { hand, bid };
  });

const cardStrength = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "T", "Q", "K", "A"];
const strengthMap = ["highCard", "onePair", "twoPair", "threeOfAKind", "fullHouse", "fourOfAKind", "fiveOfAKind"];

const getStrength = (hand) => {
  const cards = hand.split("");
  const count = {};
  cards.forEach((card) => {
    if (count[card]) {
      count[card]++;
    } else {
      count[card] = 1;
    }
  });
  const j = count.J;
  if (j !== 5) {
    delete count.J;
  }
  let tally = Object.values(count);
  if (j && j !== 5) {
    // add j to the highest number in the array
    tally[tally.indexOf(Math.max(...tally))] = tally[tally.indexOf(Math.max(...tally))] + j;
  }
  if (tally[0] === 5) {
    return strengthMap[6];
  } else if (tally.includes(4)) {
    return strengthMap[5];
  } else if (tally.includes(3) && tally.includes(2)) {
    return strengthMap[4];
  } else if (tally.includes(3)) {
    return strengthMap[3];
  } else if (tally.filter((t) => t === 2).length === 2) {
    return strengthMap[2];
  } else if (tally.filter((t) => t === 2).length === 1) {
    return strengthMap[1];
  } else {
    return strengthMap[0];
  }
};

const sortFn = (a, b) => {
  const strengthDifference = strengthMap.indexOf(getStrength(a.hand)) - strengthMap.indexOf(getStrength(b.hand));
  if (strengthDifference === 0) {
    let i = 0;
    let result = 0;
    while (i < 5 && result === 0) {
      result = cardStrength.indexOf(a.hand[i]) - cardStrength.indexOf(b.hand[i]);
      i++;
    }
    return result;
  } else if (strengthDifference < 0) {
    return -1;
  } else {
    return 1;
  }
};

const main = (input) => {
  const hands = parseInput(input);
  hands.sort(sortFn);
  return hands.reduce((a, c, i) => {
    return a + c.bid * (i + 1);
  }, 0);
};

console.log(main(input[0]));
