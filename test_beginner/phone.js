

var diners=900;
var suma=0;
var op="t";
var acc="a";
var n_tel=0;
var n_acc=0;
while (suma<diners){

		while (op==="t"){
			op= prompt("vols (t)elefon o (s)ortir:");
			if (op==="t"){
				suma+=250;
				n_tel+=1;
			}else{
				break;
			}
		}
		op="t";
		while (acc==="a"){
			acc= prompt("vols (a)ccesori o (s)ortir:");
			if (acc==="a"){
				suma+=50;
				n_acc+=1;
			}else{
				break;
			}
		}
		acc="a";
	
	console.log ("numero de telefons: " + n_tel);
	console.log ("numero d'accesoris: " + n_acc);
	console.log ("tot costa: " + suma);
	if (suma<diners){
		alert("calcular factura");
		//factura(n_acc,n_tel);
	}else {
		console.log ("no tens tants diners");
		alert ("no tens tants diners.......sortint");
	break;}
	var exit="c";
	exit= prompt("vols seguir (c)omprant o (s)ortir:");
			if (exit==="s"){
				break;
			}	
}




