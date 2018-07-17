/*
 * Programming Quiz: Avarage Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...theArgs) {
    let temp = 0;
    for(const theArg of theArgs){
    temp+=theArg; 
    n = theArgs.length;
    }
    return temp/n;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
