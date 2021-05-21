
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check
3. Fkt. Grundrechenarten :: check!
4. Ausgabe in Konsole :: check!
*/

ausgabe(rechner(getop(),10,4));

// Modul: Operand eingeben | Text
//ausgabe(getop());
function getop() {
    let op = prompt("Bitte + |- |* |/ eingeben.")
 
 if (isOpValid(op)) {
     return op;
 } else {
     return"Bitte nochmahl!"
 }
 
 
    return op; 
}

function isOPValid(checkStr) {
    return false;
}



// Modul: Rechenart auswählen | Test
//ausgabe(rechner("+",10,4));
//ausgabe(rechner("-",10,4));
//ausgabe(rechner("*",10,4));
//ausgabe(rechner("/",10,4));
//ausgabe(rechner("/",10,0));
//ausgabe(rechner("#?!",10,0));



function rechner(op,a,b) {

switch (op) {
    case "+":
        return addieren(a,b);
    case "-":
        return subtrahieren(a,b);
    case "*":
        return multiplizieren(a,b);
    case "/":
        return dividieren(a,b);            

    default:
        return "irgendwas ging schief!"
}



return addieren(a,b);
//return multiplizieren(2,2);    
}



// Modul: Division a / b | Test
//ausgabe(dividieren(2,2));
//ausgabe(dividieren(0,5));
//ausgabe(dividieren(5,0));
function dividieren(a,b) {
    if(b==0){  // wenn b =0 dann Fehlermeldung
        return("Dividieren durch 0 nicht möglich!");
    }

        return a/b;
    }



// Modul: Multiplikation a * b |  Test:
//ausgabe(multiplizieren(2,2));
//ausgabe(multiplizieren(0,2));
function multiplizieren(a,b) {
    return a * b;
}


// Modul: Subtraktion a - b |  Test:
// ausgabe(subtrahieren(2,1));
// ausgabe(subtrahieren(2,10));
function subtrahieren(a,b) {
   return a - b; 
}

// Modul: Addition a + b |  Test:
//ausgabe(addieren(2,1));
function addieren(a,b) {
   return a + b; 
}

// Modul: Konsolenausgabe |  Test:
//ausgabe("Hallo Welt");
function ausgabe(outputStr) {
    console.log(outputStr);
}