
// function accum(s) {
//   const arr = s.toLowerCase().split("");
//   let res = '';
//   for (i = 0; i <= arr.length-1; i += 1){
//     res += arr[i].toUpperCase() + arr[i].repeat(i);
//     if (i < arr.length - 1) {
//       res += "-";
//     }
//   }
//   return res;
// }
// accum("Asd")
// accum("ZpglnRxqenU");
// accum("NyffsGeyylB");
// accum("MjtkuBovqrU");

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// minMax([1, 2, 3, 4, 5]);
// minMax([2334454, 5]);
// minMax([5]);

// function findShort(s) { 
//   let minWordLength = s.split(" ")[0].length;
//   for (let i = 1; i <= s.split(" ").length-1; i += 1){
//     const currentWordLength = s.split(" ")[i].length;
//     if (currentWordLength < minWordLength) {
//       minWordLength = currentWordLength;
//     }
//   }
//   return minWordLength;
// }

// findShort("bitcoin take over the world maybe who knows perhaps");
// findShort("turns out random test cases are easier than writing out basic ones");
// findShort("Let's travel abroad shall we");


// function countSheeps(sheeps) {
//    const presentSheep = sheeps.filter((sheep) => sheep === true);
//    const count = presentSheep.length;
//    return count;
// }

// countSheeps([])
// countSheeps([undefined])
// countSheeps([null])
// countSheeps([false])
// countSheeps([true])
// countSheeps([undefined,null,false,true])
// countSheeps([undefined,null,false,true,true,false,null,undefined])
// countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true])


// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// repeatStr(3, "*");
// repeatStr(5, "#");
// repeatStr(2, "ha ");

// function nameShuffler(str) {
//   return str.split(" ").reverse().join(" ")
// }

// nameShuffler("Mary jeggins");
// nameShuffler("tom jerry");
// nameShuffler("john McClane");

// function sortByLength (array) {
//   return array.sort(function (a, b) {
//       return a.length - b.length;
//     })
// };
// sortByLength(["Beg", "Life", "I", "To"]);
// sortByLength(["", "Moderately", "Brains", "Pizza"]);
// sortByLength(["Longer", "Longest", "Short"]);



// function diamond(n) {
//   if ( n % 2 === 0||n<=0) return null
//   let result = "";
//   const center = Math.floor(n / 2);
//   for (let i = 0; i < n; i++) {
//     const spaces = Math.abs(center - i);
//     const stars = n - 2 * spaces;
//     result += " ".repeat(spaces) + "*".repeat(stars) + "\n";
//   }
//   return result;
// }
// diamond(1);
// diamond(3);
// diamond(5);
// diamond(2);


// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// solution("abcde", "cde");
// solution("abcde", "abc");


// function between(a, b) {
//   return Array.from({ length: b-a+1 }, (v, i) => a+i)
// }

// between(1, 4);
// between(-2, 2);



// function areYouPlayingBanjo(name) {
//   return name.split("")[0].toUpperCase() === "R"
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`
// }

// `${x} plays banjo`:`${x} does not play banjo`;

// areYouPlayingBanjo("Adam");
// areYouPlayingBanjo("Paul");
// areYouPlayingBanjo("Ringo");
// areYouPlayingBanjo("bravo");
// areYouPlayingBanjo("rolf");


// var capitals = function (word) {
//     const indexes = [];
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === word[i].toUpperCase()) {
//         indexes.push(i);
//       }
//     }
//     return indexes;
// };
// capitals("CodEWaRs");

// function fakeBin(x) { 
//   return x.split("").map((n) => n >= 5 ? 1 : 0).join("");
// }

// fakeBin("45385593107843568");
// fakeBin("509321967506747");
// fakeBin("366058562030849490134388085");

// function friend(friends) {
//   return friends.filter((item) => item.length === 4);
// }

// friend(["Ryan", "Kieran", "Mark"]);
// friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
// friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
// friend(["Love", "Your", "Face", "1"]);



// function problem(x) {
//   return typeof x === "number" ? x * 50 + 6 : "Error";
// }

// problem(1);
// problem("hello");

// function sumMix(x) { 
//   return x.reduce((acc, num) => {
//     const number = parseInt(num);
//     if (!isNaN(number)) {
//       return acc + number;
//     }
//     return acc;
//   }, 0);
// }

// console.log(sumMix([9, 3, "7", "3"]));
// console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
// console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));



// function removeUrlAnchor(url) {
//   const oneArr = [...url]
//     url.split("").map(x => {
//       if (x === "#") return oneArr.splice(oneArr.indexOf(x), oneArr.length);
//     })
//   return oneArr.join("");
// }

// console.log(removeUrlAnchor("www.codewars.com#about"));
// console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
// console.log(removeUrlAnchor('www.codewars.com/katas/'));


// var uniqueInOrder = function (iterable) {
//   const lowerInput = String(iterable);
//   const uniqueChars = [];

//   for (const char of lowerInput) {
//     const upperChar = char.toUpperCase();
//     if (!uniqueChars.includes(upperChar)) {
//       uniqueChars.push(upperChar);
//     }
//   }

//   return uniqueChars;
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));


// function removeExclamationMarks(s) {
//     return s.split("").filter((el) => el !== "!").join("");
// }

// console.log(removeExclamationMarks("Hello World!"));
// console.log(removeExclamationMarks("!!Hello World!!!"));

// function findDifference(a, b) {
//   return a.reduce((acc, num) => (num *= acc)) >
//     b.reduce((acc, num) => (num *= acc))
//     ? a.reduce((acc, num) => (num *= acc)) -
//         b.reduce((acc, num) => (num *= acc))
//     : b.reduce((acc, num) => (num *= acc)) -
//         a.reduce((acc, num) => (num *= acc));
// }

// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// console.log(findDifference([9, 7, 2], [5, 2, 2]));
// console.log(findDifference([11, 2, 5], [1, 10, 8]));
// console.log(findDifference([4, 4, 7], [3, 9, 3]));
// console.log(findDifference([15, 20, 25], [10, 30, 25]));


// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints);
//     const res = classPoints.reduce((acc, num) => acc + num, 0) / classPoints.length;
//     return yourPoints > res ? true : false;
// }

// console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
// function likes(names) {
//   switch (true) {
//     case !names.length:
//       return "no one likes this";
//       break;
//     case names.length === 1:
//       return `${names[0]} likes this`;
//       break;
//     case names.length === 2:
//       return `${names[0]} and ${names[1]} like this`;
//       break;
//     case names.length === 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       break;
//     case names.length >= 4:
//       return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
//       break;
//   }
// }

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// function basicOp(operation, value1, value2) {
//     return eval(`${value1}${operation}${value2}`);
// }

// console.log(basicOp("+", 4, 7))
// console.log(basicOp("-", 15, 18))
// console.log(basicOp("*", 5, 5))
// console.log(basicOp("/", 49, 7));

// function hoopCount(n) {
//     return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
// }

// hoopCount(3);
// hoopCount(11);

// function highAndLow(numbers) {
//     let arrNumb = numbers.split(" ").map(x=>Number(x));
//     return `${Math.max.apply(null, arrNumb)} ${Math.min.apply(null, arrNumb)}`;
// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
// highAndLow("1 2 3");

// function updateLight(current) {
//   switch (true) {
//     case current === "green":
//       return "yellow";
//       break;
//     case current === "yellow":
//       return "red";
//       break;
//     case current === "red":
//       return "green";
//       break;
//   }
// }

// updateLight("green");
// updateLight("yellow");
// updateLight("red");

// function check(a, x) {
//     return a.includes(x);
// }

// check([66, 101], 66)
// check([101, 45, 75, 105, 99, 107], 107);
// check(["t", "e", "s", "t"], "e");
// check(["what", "a", "great", "kata"], "kat");

// function cockroachSpeed(s) {
//     //   km/h --> cm/s
//     return Math.floor((s * 100000) / 3600);
// }

// cockroachSpeed(1.08);
// cockroachSpeed(1.09);
// cockroachSpeed(0);
// cockroachSpeed(60);

// function getSum(a, b) {
//     let sum = 0;
//     if (a === b) return a;
//     else if (a < b) {
//       for (let i = a; i <= b; i++) {
//         sum += i;
//       }
//     } else {
//       for (let i = b; i <= a; i++) {
//         sum += i;
//       }
//     }
//     return sum;
// }

// getSum(0, -1);
// getSum(0, 1);
// getSum(2, 2);
// getSum(-1, 2);

// function reverseWords(str) {
//     return str.split(" ").map((x) => x.split("").reverse().join("")).join(" ");
// }

// reverseWords("The quick brown fox jumps over the lazy dog.");
// reverseWords('apple');
// reverseWords("a b c d");
// reverseWords("double  spaced  words");

// function findUniq(arr) {
//   const uniqueElement = [...new Set(arr)].find(
//     (item) => arr.indexOf(item) === arr.lastIndexOf(item)
//   );
//   return uniqueElement;
// }

// findUniq([1, 0, 0]);

// function powersOfTwo(n) {
//     let res = [];
//     for (let i = 0; i <= n; i += 1){
//         res.push(2**i)
//     }
//   return res;
// }

// powersOfTwo(0);
// powersOfTwo(1);
// powersOfTwo(4);

// function lovefunc(flower1, flower2) {
//     return (flower1 % 2 && !(flower2 % 2) || flower2 % 2 && !(flower1 % 2)) ? true : false;
// }

// lovefunc(1, 4);
// lovefunc(2, 2);
// lovefunc(0, 1);
// lovefunc(0, 0);

// function countDuplicates(text) {
//   const lowerInput = text.toLowerCase();
//     const seenCharacters = new Set()
//     const countedCharacters = new Set();
//   let count = 0;
//     for (const char of lowerInput) {
//       console.log(char)
//     if (/[a-z0-9]/.test(char)) {
//       if (seenCharacters.has(char) && !countedCharacters.has(char)) {
//         count++;
//         countedCharacters.add(char);
//       } else {
//         seenCharacters.add(char);
//       }
//     }
//   }
//   return count;
// }

// Example usage:
// countDuplicates("abcde"); // Output: 0
// console.log(countDuplicates("aabbcde")); // Output: 2
// console.log(countDuplicates("aabBcde")); // Output: 2
// console.log(countDuplicates("indivisibility")); // Output: 1
// console.log(countDuplicates("Indivisibilities")); // Output: 2
// console.log(countDuplicates("aA11")); // Output: 2
// console.log(countDuplicates("ABBA")); // Output: 2

// duplicateCount("Indivisibilities");

// function countSmileys(arr) {
//   const validSmileyPattern = /^[:;][-~]?[)D]$/;
//   return console.log(
//     arr.filter((face) => validSmileyPattern.test(face)).length
//   );
// }
// countSmileys([])
// countSmileys([":D", ":~)", ";~D", ":)"]);
// countSmileys([":)", ":(", ":D", ":O", ":;"]);
// countSmileys([";]", ":[", ";*", ":$", ";-D"]);

// function doubleChar(str) {
//   return str
//     .split("")
//     .map((x) => x + x)
//     .join("");
// }

// doubleChar("abcd");
// doubleChar("Adidas");
// doubleChar("1337");
// doubleChar("illuminati");
// doubleChar("123456");
// doubleChar("%^&*(");

// function count(string) {
//     const charCounts = {};
//     for (const char of string) {
//         charCounts[char] = (charCounts[char] || 0) + 1;
//         console.log(charCounts[char]);
//     }
//     return charCounts;
// }
// count("");
// count("a");
// count("ab");
// count("aba");
// count("ABC");

// function persistence(num) {
//     let count = 0;
//     for (; num >= 10; count += 1){
//         num = String(num)
//           .split("")
//           .reduce((product, digit) => product * parseInt(digit), 1);
//     }
//     return count;
// }

// persistence(39);
// persistence(4);
// persistence(25);
// persistence(999);

// function otherAngle(a, b) {
//   return 180 - (a + b);
// }

// otherAngle(30, 60);
// otherAngle(60, 60)

// const reverseSeq = (n) => {
//   return Array.from({ length: n }, (v, i) => i + 1).reverse();
// };

// reverseSeq(5);
// reverseSeq(3);

// var countSheep = function (num) {
//     let res = "";
//     for (let i = 1; i <= num; i += 1){
//         res += i + " sheep...";
//     }
//     return res;
// };
// countSheep(0);
// countSheep(1);
// countSheep(2);
// countSheep(3);

// function arrayDiff(a, b) {
//     if (!a.length) return []
//     if (!b.length) return a;
//     return a.filter((x) => !b.includes(x));
// }

// arrayDiff([1, 2], [1]);
// arrayDiff([1, 2, 2], [1]);
// arrayDiff([1, 2, 2], [2]);
// arrayDiff([1, 2, 2], []);
// arrayDiff([], [1, 2]);
// arrayDiff([1, 2, 3], [1, 2]);

// function expressionMatter(a, b, c) {
//   return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c); // highest achievable result
// }

// expressionMatter(2, 1, 2);
// expressionMatter(2, 1, 1);
// expressionMatter(2, 10, 3);
// expressionMatter(1, 8, 3);

// var humanYearsCatYearsDogYears = function (humanYears) {
//   let catYears;
//   let dogYears;
//   console.log(humanYears);
//   if (humanYears === 1) {
//     catYears = 15;
//     dogYears = 15;
//   } else if (humanYears === 2) {
//     catYears = 24;
//       dogYears = 24;
//   } else if (humanYears > 2) {
//     catYears = 24 + 4 * (humanYears - 2);
//       dogYears = 24 + 5 * (humanYears - 2);
//   } else {
//     catYears = 0;
//     dogYears = 0;
//   }
//   return [humanYears, catYears, dogYears];
// };

// humanYearsCatYearsDogYears(1);
// humanYearsCatYearsDogYears(2);
// humanYearsCatYearsDogYears(10);

// function getGrade(s1, s2, s3) {
//     const res = (s1 + s2 + s3) / 3;

//     switch (true) {
//       case res >= 90 && res <= 100:
//         return "A";
//         break;
//       case res >= 80 && res < 90:
//         return "B";
//         break;
//       case res >= 70 && res < 80:
//         return "C";
//         break;
//       case res >= 60 && res < 70:
//         return "D";
//         break;
//       default:
//         return "F";
//     }
// }

// getGrade(95, 90, 93);
// getGrade(100, 85, 96);
// getGrade(70, 70, 100);
// getGrade(82, 85, 87);
// getGrade(70, 70, 70);
// getGrade(75, 70, 79);
// getGrade(65, 70, 59);
// getGrade(66, 62, 68);
// getGrade(44, 55, 52);
// getGrade(48, 55, 52);

// function points(games) {
//   let totalPoints = 0;

//   for (const match of games) {
//     const [x, y] = match.split(":").map(Number);

//     if (x > y) {
//       totalPoints += 3;
//     } else if (x === y) {
//       totalPoints += 1;
//     }
//   }

//   return totalPoints;
// }

// points(["1:0", "2:0", "3:0", "4:4", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);
// points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]);
// points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]);
// points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]);
// points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]);

// const areaOrPerimeter = function (l, w) {return l === w ? l*w : l*2+w*2;};

// areaOrPerimeter(3, 3);
// areaOrPerimeter(6, 10);

// function grow(x) {
//     return x.reduce((pv, num) => {
//         return pv * num;
//     },1)
// }

// grow([1, 2, 3]);
// grow([4, 1, 1, 1, 4]);
// grow([2, 2, 2, 2, 2, 2]);

// function getMiddle(s) {
//     const i = Math.floor(s.length / 2);
//     let result = s[i];
//     if (s.length % 2 === 0 && i > 0) {
//       result = s[i - 1] + result;
//     }
//     return result;
// }

// getMiddle("test");
// getMiddle("testing");
// getMiddle("middle");
// getMiddle("A");

// const rps = (p1, p2) => {
//     const getMsg = (n) => `Player ${n} won!`;
//     if (p1 === p2) {
//         return "Draw!"
//     }
//     if (
//       (p1 === "rock" && p2 !== "paper") ||
//       (p1 === "scissors" && p2 !== "rock") ||
//       (p1 === "paper" && p2 !== "scissors")
//     ) {
//       return getMsg(1);
//     }
//     return getMsg(2);
// };

// rps("rock", "scissors");
// rps("scissors", "paper");
// rps("paper", "paper");
// rps("paper", "rock");
// rps("scissors", "rock");

// var min = function (list) {
//   return Math.min.apply(null, list);
// };

// var max = function (list) {
//   return Math.max.apply(null, list);
// };

// min([-52, 56, 30, 29, -54, 0, -110]);
// min([42, 54, 65, 87, 0]);
// max([4, 6, 2, 1, 9, 63, -134, 566]);
// max([5]);

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min.apply(null, args);
//   }
// }
// let sif = new SmallestIntegerFinder();

// sif.findSmallestInt([78, 56, 232, 12, 8]);
// sif.findSmallestInt([78, 56, 232, 12, 18]);
// sif.findSmallestInt([78, 56, 232, 412, 228]);
// sif.findSmallestInt([78, 56, 232, 12, 0]);
// sif.findSmallestInt([1, 56, 232, 12, 8]);

// function findAverage(array) {
//   if (!array.length) return 0;
//   return (
//     array.reduce((previousValue, number) => previousValue + number, 0) /
//     array.length
//   );
// }

// findAverage([1, 1, 1]);
// findAverage([1, 2, 3]);
// findAverage([1, 2, 3, 4]);

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8;
//     }
//     return number * 9;
// }
// simpleMultiplication(2);
// simpleMultiplication(1);
// simpleMultiplication(8);
// simpleMultiplication(4);
// simpleMultiplication(5);

// function stringToArray(string) {
//     return string.split(" ");
//  }

// stringToArray("Robin Singh");
// stringToArray("I love arrays they are my favorite");

// function sum (numbers) {
//     "use strict";
//     return numbers.reduce((previousValue, number) =>  previousValue + number, 0)
// };

// sum([]);
// sum([1, 5.2, 4, 0, -1]);

// function filter_list(l) {
//     const resArr = [];
//     l.map(x => {
//         if (typeof x === 'number') {
//             resArr.push(x);
//         }
//     })
//     return resArr;
// }

// filter_list([1, 2, "a", "b"]);
// filter_list([1, 'a', 'b', 0, 15]);
// filter_list([1, 2, "aasf", "1", "123", 123]);

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

// validatePIN("1");
// validatePIN("12");
// validatePIN("123456");
// validatePIN("1234");

// function addBinary(a, b) {
//     return (a + b).toString(2);
// }

//  addBinary(1, 2);

// function isIsogram(str) {
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];

//     if (str.indexOf(letter, i + 1) !== -1) {
//       return false;
//     }
//   }

//   return true;
// }
// isIsogram("Dermatoglyphics");
// isIsogram("isogram");
// isIsogram("aba");
// isIsogram("isIsogram");
// isIsogram("");

// function squareDigits(num) {
//     const resultStr = num
//       .toString()
//       .split("")
//       .map((digit) => Math.pow(parseInt(digit, 10), 2))
//       .join("");

//     const result = parseInt(resultStr, 10);
//     console.log(result);
//     return result;
// }
// squareDigits(3212);
// squareDigits(2112);
// squareDigits(0);

// function strCount(str, letter) {
//     const array = str.split("");
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count+=1;
//       }
//     }
//      return count;
// }

// strCount("Hello", "o");
// strCount("Hello", "l");
// strCount("", "z");

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i += 1) {
//       sum += i;
//     }
// return sum;
// };

// summation(1);
// summation(2);
// summation(8);

// function greet(name, owner) {
//     if (name === owner) return "Hello boss";
//     else return "Hello guest";
// }

// greet("Daniel", "Daniel");
// greet("Greg", "Daniel");

// const quarterOf = (month) => {
//     if (month < 1 && month > 12) return;
//     if (month >= 1 && month <= 3) return 1;
//     if (month >= 4 && month <= 6) return 2;
//     if (month >= 7 && month <= 9) return 3;
//     if (month >= 10 && month <= 12) return 4;
// };

// quarterOf(3);
// quarterOf(8);
// quarterOf(11);
// quarterOf(14);

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height
//   }
// }

// Kata.getVolumeOfCuboid(1, 2, 2);
// Kata.getVolumeOfCuboid(6, 2, 5);

// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {
//     // setup loop to go through array of given length
//     if (arr[i] > 0) {
//       // if arr[i] is greater than zero
//       total += arr[i]; // add arr[i] to total
//     }
//   }
//   return total; // return total
// }

// positiveSum([1, 2, 3, 4, 5]);
// positiveSum([1, -2, 3, 4, 5]);
// positiveSum([]);
// positiveSum([-1, -2, -3, -4, -5]);
// positiveSum([-1, 2, 3, 4, -5]);

// const stringToNumber = function (str) {
//   return Number(str);
// };

// stringToNumber("1234");
// stringToNumber("605");
// stringToNumber("1405");
// stringToNumber("-7");

// function hero(bullets, dragons) {
//     if (!bullets || !dragons) return console.log(false);
//     if (Math.floor(bullets / 2) >= dragons) return console.log(true);
//     else console.log(false)
// }

// hero(10, 5);
// hero(7, 4);
// hero(4, 5);
// hero(100, 40);
// hero(1500, 751);
// hero(0, 1);

// function invert(array) {
//   return array.map((x) => (x === 0 ? x : -x));
// }

// invert([1, 2, 3, 4, 5]);
// invert([1, -2, 3, -4, 5]);
// invert([]);
// invert([0]);

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     const res = distanceToPump / mpg === fuelLeft;
//     return res;
// };

// zeroFuel(50, 25, 2)
// zeroFuel(100, 50, 1);

// function litres(time) {
//   return Math.floor(time/2);
// }

// litres(2);
// litres(1.4);
// litres(12.3);
// litres(0.82);
// litres(11.8);
// litres(1787);
// litres(0);

// function smash(words) {
//     if (!words.length) return "";
//     if (words.length === 1) return words.join();
//    return words.join(" ").trim()
// };

// smash([]);
// smash(["hello"]);
// smash(["hello", "world"]);
// smash(["hello", "amazing", "world"]);
// smash(["this", "is", "a", "really", "long", "sentence"]);

// function squareSum(numbers) {
//     if (!numbers.length) return 0;

//    const total = numbers.reduce((previousValue, number) => {
//      return previousValue + number**2;
//    }, 0);
//    return total
// }

// squareSum([1, 2]);
// squareSum([0, 3, 4, 5]);
// squareSum([]);

// function digitize(n) {
//     const res = n.toString().split("").reverse();
//     const newArray = []
//     for (let i = 0; i < res.length; i += 1) {
//         newArray.push(Number(res[i]));
//     }
//     return console.log(newArray);
//   //code here
// }

// digitize(35231);
// digitize(0);
// digitize(14);
// function abbrevName(name) {
//   return console.log(
//     name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
//   );
// }

// abbrevName("Sam Harris");
// abbrevName("Patrick Feenan");
// abbrevName("Evan Cole");
// abbrevName("P Favuzzi");
// abbrevName("David Mendieta");

// function findNeedle(haystack) {
//   const result = haystack.map((hay) => {
//     const hayString = String(hay);
//     if (typeof hay !== "string") {
//       return;
//     }
//     if (hayString !== "needle") {
//       return;
//     }
//     const numberOf = haystack.indexOf(hay);
//     console.log(`found the needle at position ${numberOf}`);
//   });
//   return result;
//   // your code here
// }

// const haystack_1 = [
//   "3",
//   "123124234",
//   undefined,
//   "needle",
//   "world",
//   "hay",
//   2,
//   "3",
//   true,
//   false,
// ];
// const haystack_2 = [
//   "283497238987234",
//   "a dog",
//   "a cat",
//   "some random junk",
//   "a piece of hay",
//   "needle",
//   "something somebody lost a while ago",
// ];
// const haystack_3 = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   8,
//   7,
//   5,
//   4,
//   3,
//   4,
//   5,
//   6,
//   67,
//   5,
//   5,
//   3,
//   3,
//   4,
//   2,
//   34,
//   234,
//   23,
//   4,
//   234,
//   324,
//   324,
//   "needle",
//   1,
//   2,
//   3,
//   4,
//   5,
//   5,
//   6,
//   5,
//   4,
//   32,
//   3,
//   45,
//   54,
// ];

// findNeedle(haystack_3);
