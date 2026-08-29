let marks=Array(5);
marks[0]=90;
marks[1]=80;
marks[2]=70;
marks[3]=60;
marks[4]=50;

let newMarks = new Array(20,30,40,50,60);

newMarks.push(70);
console.log(newMarks);
newMarks.pop();
console.log(newMarks);
newMarks.shift();
console.log(newMarks);
newMarks.unshift(10);
console.log(newMarks);
console.log(newMarks.length);


console.log(newMarks.indexOf(50)); // returns the index of the first occurrence of 50 in the array, which is 3

ispresent = newMarks.includes(50); // returns true if 50 is present in the array, false otherwise
console.log(ispresent);

console.log(newMarks.includes(100)); // returns false since 100 is not present in the array

var sum=0
for(let i=0; i<newMarks.length; i++){
    console.log(newMarks[i]);
    sum += newMarks[i];
}
console.log(sum);

var max=newMarks[0];
for(let i=0; i<newMarks.length; i++){
    console.log(newMarks[i]);
    if(newMarks[i]>max){
        max=newMarks[i];
    }
}
console.log("max is " + max);
