//reduce filter map
var marks = [10, 20, 30, 40, 50];
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total marks: " + total);


var scores = [10, 20, 31, 40, 51];
//print even numbers from the array
var evenScores = scores.filter(score => score % 2 === 0);
console.log("Even scores: " + evenScores);

var oddscore=scores.filter(score => score%2!==0);
console.log("Odd scores: " + oddscore);

var newScores = scores.map(score => score * 2);
console.log("New scores: " + newScores);


// map



