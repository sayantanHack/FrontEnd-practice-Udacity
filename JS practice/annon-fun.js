// creating an anonymous function using a variable
var laugh = function (num){
    var output ="";
    for(var i =0;i<num;i++){
       output += "ha";
    }
    return output+"!".trim();
}

console.log(laugh(10));
