/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'a high school diploma';

// set the value of this based on a person's education
var salary;

// your code goes here
switch(education){
    case 'no high school diploma':
        salary = 25636;
        salary = salary.toLocaleString("en-US");
        break;
    case 'a high school diploma':
        salary =35256;
        salary = salary.toLocaleString("en-US");
        break; 
    case "an Associate's degree":
        salary =41496;
        salary = salary.toLocaleString("en-US");
        break;
    case "a Bachelor's degree":
        salary =59124;
        salary = salary.toLocaleString("en-US");
        break;
    case "a Master's degree":
        salary =69732;
        salary = salary.toLocaleString("en-US");
        break;
    case "a Professional degree":
        salary =89960;
        salary = salary.toLocaleString("en-US");
        break;
    case "a Doctoral degree":
        salary =84396;
        salary = salary.toLocaleString("en-US");
        break;
   default:
   undefined; 
}
console.log("In 2015, a person with "+education+" earned an average of $"+salary+"/year.");
