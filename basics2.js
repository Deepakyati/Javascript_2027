/*
let j=1
for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log("2 X "+ j +" = "+(2*j));
        j++;
    }
}


*/

let k=0;
for (let i=1; i<=100; i++){
        if(i%2==0 && i%3==0){
            k++;
            console.log(i);
            if (k==3){
                break;
            }
        }
    }