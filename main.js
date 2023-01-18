"use strict";

const person = { name: "John", age: 30, occupation: "Developer" };

//what we learned so far:
person.name = "John";
person["name"] = "John";

// Object.keys()
let keys = Object.keys(person);
console.log(keys);
// Output:
// ["name", "age", "occupation"];

// Object.values();
let values = Object.values(person);
console.log(values);
// Output:
// ["John", 30, "Developer"];

// Object.entries()
let entries = Object.entries(person);
console.log(entries);

//Output:
// [
//   ["name", "John"], // <= [key, value]
//   ["age", 30],
//   ["occupation", "Developer"],
// ];

// for...in

console.log([10, 22, 6, 10]);
//0: 10
// 1: 22
// 2: 6
// 3: 10
// index similar to key in object
for (let index in [10, 22, 6, 10]) {
  console.log(index, "i");
}
// index is the index like in regular for

// for..in loop over Objects:
for (let key in person) {
  console.log(key + ": " + person[key]);
  // person.key = person["key"];
  // (1)
  // key = "name"
  // person["name"] => John
  // name: John
  // (2)
  // key = "age"
  // age : 30
}
// for..of
for (let x of [1, 2, 3]) {
  console.log(x, "x");
}

for (let value of Object.values(person)) {
  // console.log(value); // john => 30 = > Developer
}

//Output:
//name: John
// age: 30
// occupation: Developer

const movie = {
  name: "iron man",
  genre: "super hit",
};

// we can use the spread operator to concat objects

// similar to movie.genre = "action", but here we created new object
const updated2 = { genre: "action", ...movie };
// this is like:
// { genre: "action", name: "iron man",  genre: "super hit"}
// put the properties you want to update first

const updated = { genre: "action", year: 2012, ...movie };
// const updated3 = { ...userObj, ...movie };
// {
// name: "iron man",
// genre: "action",
// year: 2012
// }

const song = {
  songName: "cardigan",
};

const book = { bookName: "Harry Potter" };

const songAndBook = { ...song, ...book };
console.log(songAndBook, "songAndBook"); //// { songName: "cardigan", bookName: "Harry Potter"}

// const song = { name: "cardigan" };
// const book = { name: "Harry Potter" };
// const songAndBook = { ...song, ...book };
// console.log(songAndBook, "songAndBook"); // {name: "cardigan"}

movie.hasOwnProperty("name");
// returns true

movie.hasOwnProperty("type");
// returns false

song.hasOwnProperty("name");
// returns true

song.hasOwnProperty("status");
// returns false

// we learned about distraction
const arr = [1, 2, 3];

const [a, b] = arr;

// [["name","John" ],["age",30]]
for (let [key, value] of Object.entries(person)) {
  // console.log(key, value);
  console.log(key + ": " + value);

  // (1)
  // name, john
  // (2)
  // age, 30
}

const countWords = (words) => {
  let wordCounts = {};
  words.forEach((word) => {
    // (1)
    // word = "hello"
    // false
    // (2)
    // word = "hello"
    // true
    // (3)
    // word = world,
    // false
    if (wordCounts.hasOwnProperty(word.toLowerCase())) {
      wordCounts[word]++;
      // the same as:
      // wordCounts[word] = wordCounts[word] + 1;
    } else {
      wordCounts[word.toLowerCase()] = 1;
      // wordCounts = {
      //   hello: 1,
      // };
    }
  });
  return wordCounts;
};

const wordsArray = [
  "Hello",
  "hello",
  "javascript",
  "hello",
  "world",
  "israel",
  "javascript",
];

// console.log(countWords(wordsArray));
// {
// hello: 3,
// javascript:2,
// world: 2,
// israel: 1
// }

//or
const countWordsReduce = (words) =>
  words.reduce((accCounts, word) => {
    // (1) word = "hello" if first time:
    // {}
    // counts[word] = (undefined || 0) + 1 => 0 + 1 = 1
    // (2) word = "hello"
    // counts[word] = (1 || 0) + 1 = 1 + 1 = 2
    accCounts[word] = (accCounts[word] || 0) + 1;
    return accCounts;
  }, {});

const wordCounts2 = countWordsReduce(wordsArray);
console.log(wordCounts2);

const obj = { name: "Bob" };
//create:
obj["age"] = 30;
// obj.age = 30; or
//{ name: "Bob", age: 30 }
//update:
obj["age"] = 31;

// reminder
const res = true && true; // => true
const res2 = true && false; // => false
const res3 = false && true; // => false

const res4 = true || false; // => true
const res5 = 5 || false; // => 5
const res6 = 7 || 8; // => 7
