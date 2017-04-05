/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 

alert("Hola");

confirm ("acceptes?");

prompt ("Introdueix text");

*/

var rnum= Math.round(Math.random()*5);
console.log(rnum);
 
if(rnum%3===0 && rnum !=0) { alert("bizz");}
else if (rnum%5===0 && rnum !=0){alert("fuzz");}
else if (rnum%5===0 && rnum%3===0 && rnum !=0){alert("fuzzbizz");}
else {console.log(rnum);}
 