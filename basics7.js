let quote = 'tuesday is funday and monday is good day and friday is holiday and sunday is holiday';

str = 'day'
count=0
for (let i=0; i<quote.length; i++){
    if(quote.slice(i,i+str.length) == str){
        console.log("found at index " + i);
        count++;
    }
}
console.log("total count is " + count);