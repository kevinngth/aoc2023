// const input = require("./day1.input");

// const spelledDigitMap = {
//   eight: 8,
//   one: 1,
//   three: 3,
//   five: 5,
//   nine: 9,
//   two: 2,
//   four: 4,
//   six: 6,
//   seven: 7,
// };

// const myFunction = (arr) => {
//   let sum = 0;
//   arr.forEach((oriElement) => {
//     let firstDigit = "x";
//     let lastDigit = "x";
//     let element = oriElement;
//     // console.log("element", element);
//     // //   console.log(element);
//     // let arrayKeys = [];
//     // for (const spelled in spelledDigitMap) {
//     //   // element = element.replaceAll(spelled, spelledDigitMap[spelled]);
//     //   // zvoneightngnpvvq8mpmsdjmvznrntwo
//     //   const index = element.indexOf(spelled);
//     //   if (index !== -1) arrayKeys.push({ index: index, spelled: spelled });
//     // }
//     // let sortedArrayKeys = arrayKeys.sort((a, b) => a.index - b.index);
//     // console.log("sortedArrayKeys: ", sortedArrayKeys);
//     // //   sortedArrayKeys.forEach((appearance) => {
//     // // replace the first occurance
//     // const appearance = sortedArrayKeys[0];
//     // if (appearance) {
//     //   element = element.replace(appearance.spelled, spelledDigitMap[appearance.spelled]);
//     //   arrayKeys = [];
//     //   for (const spelled in spelledDigitMap) {
//     //     // element = element.replaceAll(spelled, spelledDigitMap[spelled]);
//     //     // zvoneightngnpvvq8mpmsdjmvznrntwo
//     //     const index = element.indexOf(spelled);
//     //     if (index !== -1) arrayKeys.push({ index: index, spelled: spelled });
//     //   }
//     //   sortedArrayKeys = arrayKeys.sort((a, b) => a.index - b.index);
//     //   console.log(`replacing ${appearance.spelled}, new sortedArrayKeys:`, sortedArrayKeys);

//     //   console.log("element", element);
//     // }
//     // // replace the last occurence
//     // const appearance2 = sortedArrayKeys[sortedArrayKeys.length - 1];
//     // if (appearance2) {
//     //   element = element.replace(appearance2.spelled, spelledDigitMap[appearance2.spelled]);
//     //   arrayKeys = [];
//     //   for (const spelled in spelledDigitMap) {
//     //     // element = element.replaceAll(spelled, spelledDigitMap[spelled]);
//     //     // zvoneightngnpvvq8mpmsdjmvznrntwo
//     //     const index = element.indexOf(spelled);
//     //     if (index !== -1) arrayKeys.push({ index: index, spelled: spelled });
//     //   }
//     //   sortedArrayKeys = arrayKeys.sort((a, b) => a.index - b.index);
//     //   console.log(`replacing ${appearance2.spelled}, new sortedArrayKeys:`, sortedArrayKeys);

//     //   console.log("element", element);
//     // }

//     // const regexps = Object.keys(spelledDigitMap).map((key) => {
//     //   return new RegExp(key, "g");
//     // });

//     // for (const regexp of regexps) {
//     //   element = element.replace(regexp, spelledDigitMap[regexp.source]);
//     // }

//     //   console.log(oriElement);
//     const stringArr = element.split("");
//     for (let index = 0; index < stringArr.length; index++) {
//       if (firstDigit === "x" && !isNaN(stringArr[index])) {
//         firstDigit = +stringArr[index];
//       }
//       if (lastDigit === "x" && !isNaN(stringArr[stringArr.length - 1 - index])) {
//         lastDigit = +stringArr[stringArr.length - 1 - index];
//       }
//     }

//     const number = `${firstDigit}${lastDigit}`;
//     console.log("number: ", number);
//     sum += +number;
//     console.log("");
//   });
//   return sum;
// };
const input = ["zvoneightngnpvvq8mpmsdjmvznrntwo", "twocsfzd1eight7eightwovm"];
const numberWords = [
  { word: "one", num: "1ne" },
  { word: "two", num: "2wo" },
  { word: "three", num: "3hree" },
  { word: "four", num: "4our" },
  { word: "five", num: "5ive" },
  { word: "six", num: "6ix" },
  { word: "seven", num: "7even" },
  { word: "eight", num: "8ight" },
  { word: "nine", num: "9ine" },
];
function replaceNumberWordAtX(s, x) {
  const found = numberWords.filter(({ word, num }) => s.indexOf(word, x) == x);
  return found.length ? s.replace(found[0].word, found[0].num) : s;
}
function name2Num(s) {
  let index = 0;
  while (index < s.length) {
    s = replaceNumberWordAtX(s, index);
    index++;
  }
  console.log(s);
  return s;
}
function justNumbers(s) {
  return s
    .split("")
    .filter((c) => c >= "0" && c <= "9")
    .map((s) => parseInt(s));
}
function firstLast(a) {
  return { f: a[0], l: a.length == 1 ? a[0] : a[a.length - 1] };
}

const calibrationPart1 = input
  .map((l) => firstLast(justNumbers(l)))
  .map(({ f, l }) => f * 10 + l)
  .reduce((c, n) => c + n, 0);
console.log("Part 1:", calibrationPart1);

const calibrationPart2 = input
  .map((l) => firstLast(justNumbers(name2Num(l))))
  .map(({ f, l }) => f * 10 + l)
  .reduce((c, n) => c + n, 0);
console.log("Part 2:", calibrationPart2);

// console.log(myFunction(input));
