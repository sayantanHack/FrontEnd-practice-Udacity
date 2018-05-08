/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(-2,1,"Yellow","Green");  //-2 means the position will be changed, 1 for the entering one element by removing the existing one.

rainbow.splice(5,0,"Purple");    //-2 is allways the position and 0 means just add that into this(-2) position.
console.log(rainbow);
