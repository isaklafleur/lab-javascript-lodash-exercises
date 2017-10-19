console.time("vanillajs");
const { abbeyRoadRecords } = require("./lib/abbeyRoad");
const { birthdays } = require("./lib/harryPotter");
const {
  count,
  chunk,
  getHighestValueOfObject,
  sortObjectByTwoKeys,
} = require("./utils");

// Iteration 1 - The Office
const opinions = [
  "This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer",
];

function pickOpinion() {
  return opinions[Math.floor(Math.random() * opinions.length)];
}

function addOpinion() {
  const opinions = [];
  for (let i = 0; i < 10; i++) {
    opinions.push(pickOpinion());
  }
  return opinions;
}

function employeeSatisfaction() {
  const building = [];
  for (let i = 0; i < 5; i++) {
    building.push(addOpinion());
  }
  return building;
}

console.log(employeeSatisfaction());

// Iteration 2 - Harry Potter's Birthdays
const moreBirthdays = [
  "Lily Evans",
  "30 January",
  "James Potter",
  "27 March",
  "Dudley Dursley",
  "30 June",
  "Tom Riddle",
  "31 December",
];

const allBirthdays = birthdays.concat(moreBirthdays);
console.log(chunk(allBirthdays, 2));

// Iteration 3 - The Password Problem (trim to lenght 10 & password with only unique characters)
var goodPsswd = "1234567890";
var badPsswd = "1123456";
const noRepeatChar = password => {
  const passwordArray = password.split("");
  const noRepeatChar = passwordArray.filter(
    (value, index, self) => self.indexOf(value) === index,
  );
  return passwordArray.length === noRepeatChar.length ? "OK" : "NOT OK";
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
const onlyNumbers = password => {
  return /^\d+$/.test(password) ? "OK" : "NOT OK";
};
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
const trimPassword = password => {
  return password.substring(0, 10);
};
console.log(trimPassword(badPsswd));

// Iteration 4 - Abbey Road Studios
const novemberArtists = array => {
  const artistsByCount = count(
    array.filter(item => item.month === 10).map(item => item.artist),
  );
  const artistsMadeMostRecords = getHighestValueOfObject(artistsByCount);

  return artistsMadeMostRecords;
};
console.log(novemberArtists(abbeyRoadRecords));

const bestArtist = array => {
  const artistsByCount = count(array.map(item => item.artist));
  return getHighestValueOfObject(artistsByCount);
};
console.log(bestArtist(abbeyRoadRecords));

const lastBeatlesSong = array => {
  const theBeatles = array.filter(item => item.artist === "The Beatles");
  const test = theBeatles.reduce(
    (prev, current) => (prev.year > current.year ? prev : current),
  );
  return test.year;
};
console.log(lastBeatlesSong(abbeyRoadRecords));

const sixtiesSong = array => {
  const theSixties = array.filter(item => /^196/.test(item.year));
  const theSixtiesSortedByYearAndMonth = sortObjectByTwoKeys(theSixties);
  return theSixtiesSortedByYearAndMonth[0].artist;
};
console.log(sixtiesSong(abbeyRoadRecords));
console.timeEnd("vanillajs");
