let day = 'Monday';

console.log(day.length);

let subday  = day.slice(0,3);
console.log(subday);
console.log(day.toUpperCase());
console.log(day.toLowerCase());

console.log(day.replace('Mon','Fri'));
console.log(day.charAt(0));

console.log(day.indexOf('n'));
console.log(day.lastIndexOf('n'));

console.log(day.split(''));
console.log(day.split('d'));

console.log(day.startsWith('Mon'));
console.log(day.endsWith('day'));

let nextday = ' tuesday ';

console.log(nextday);
console.log(nextday.trim());


let date ='23'

let nextdate = '28'

let diff = parseInt(nextdate) - parseInt(date);
console.log(diff);
console.log(typeof(diff.toString()));
