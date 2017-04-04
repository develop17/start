/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 


*/

var op= prompt ("Introdueix opció: pedra, paper, tisores");
var opcio=1;
if(op==="paper") {opcio=1; }
else if (op==="pedra" ){opcio=2;}
else {opcio=3;}
console.log("el usuari agafa " + op);
alert("el usuari agafa " + op);

var opc= Math.round(Math.random()*3);

if(opc===1) {op_="paper"; }
else if (opc===2 ){op_="pedra";}
else {op_="tisores";}
console.log("el pc agafa " + op_);

alert ("el pc agafa: " + op_);

console.log("usu " + opcio);
console.log("pc" + opc);
if(opc>opcio) {
	alert("guanya pc!");
		console.log("guanya pc!");
		
	}else if (opc===opcio ){
		alert("empat!");
		console.log("empat!");
		}
else {
	alert("guanya usuari!!");
	console.log("guanya usuari!");
}




