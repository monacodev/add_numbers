alert("programme qui additionne deux nombres"); // affiche un message dans un popup

var nombre = parseInt(prompt("veuillez saisir un nombre")); // convertit une string en number 

console.log(nombre); // affiche dans la console la valeur de nombre 

console.log(typeof nombre); // affiche le type de la variable nombre. js donne dynamiquement le type d'une variable  

var nombre2 = parseInt(prompt("veuillez saisir un nombre2 "));  // convertit une string en number 

var resultat = nombre + nombre2;  // stockage du résultat de l'addition des deux nombres dans uen variable

var typeOfNb2 = typeof nombre2; // j'ai stocké la valeur de typeof nombre2 pour un coté plus pratique 

console.log("${typeOfNb2}", typeof nombre);

alert(`Le résultat de l'addition de ${nombre} + ${nombre2} = ` + resultat); // j'affiche dans un message le résultat de l'addition de nombre et nombre2  

