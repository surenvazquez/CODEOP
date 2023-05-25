/** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

// El teu exercici comença aquí:

/*
1)
Completa aquest codi per què "getDrink" sigui "true"
quan "thirsty" sigui "true", i que "getDrink" sigui
"false" quan "thirsty" sigui "false".

Pista per provar el teu codi:
console.log(thirsty, " should equal ", getDrink);
*/

problemNumber(1);

const thirsty = true;
let getDrink = null;

if (thirsty === false) {
  getDrink=false;
  // if (x === y) {

i
}

/*
2)
Canvia la variable "light" a "red", després "green",
després "yellow" i comprova el què s'imprimeix. Ara canvia
la variable a "purple". Què succeeix?
Canvia el codi per què només "green" digui "Go.", "red" digui "Stop!"
i "yellow" digui "Wait...". Amb les teves modificacions, quan
s'introdueixi qualsevol altra paraula ha de dir "Light malfunction".

Pista pel test:
console.log("light is ", light, " so car should ", driveCar);

*/
problemNumber(2);

const light = null;
let driveCar = null;
if (light === "red") {
  driveCar = "Stop!";
} else if (light === "yellow") {
  driveCar = "Wait...";
} else {
  driveCar = "Go.";
}
console.log("light is ", light, " so car should ", driveCar);
/*
3)
Escriu el codi per a la següent situació:
Si la temperatura baixa de 15 graus,
la persona s'hauria de posar un jersei.

*/
problemNumber(3);

/*
4)
Defineix un número i comprova si és parell o senar.
*/
problemNumber(4);

let number = null;
let type = null;
if (number % 2 == 0) {
  type = "par";
 } else {
   type = "impar";
 }
 console.log(number, "es", type);

/*
5)
Escriu el codi per a la següent situació:
Si la persona és vegana, les seves restriccions
alimentàries són "no meat or dairy".
Si la persona és vegetariana, les seves restriccions
alimentàries són "no meat".
Si la persona no és cap de les anteriors,
no te cap restricció alimentària (null).
*/
problemNumber(5);

const vegan = false;
const vegetarian = true;
let restrictions = null
 if (vegan) {
  restrictions = "no meat or dairy";
} else if (vegetarian) {
   restrictions = "no meat"
} 
 console.log("the restrictions of the persone are",restrictions)
/*
6)
Depura el següent codi.
Necessitaràs canviar els valor de "x",
"y" i "z" per trobar l'error!

text output:
console.log(answer);
*/
problemNumber(6);

const x = 1;
const y = 2;
const z = 3;
var answer = "null";

if (x === z) {
  if (x === y) {
    answer = "all are equal";
  } else {
    answer = "x and y are equal";
  }
} else if (x === z) {
  answer = "x and z are equal";
} else if (y === z) {
  answer = "y and z are equal";
} else {
  answer = "all are different";
}
console.log(answer);
/*
7)
Completa aquest codi!
Elimina el "true" de la declaració condicional
i fes servir les variables "eatsMeat" i "eatsDairy"
i l'operador "&&"!

text output:
console.log(diet);
*/
problemNumber(7);

const eatsMeat = false;
const eatsDairy = false;
let diet = null;

if (eatsDairy) {
  diet = "vegan";
} else if (eatsMeat && (eatsMeat == false)) {
  diet = "vegetarian";
} else {
  diet = "no dietary restrictions";
}
if (eatsMeat == true && eatsDairy === false) {
  diet = "vegan";
} else if (eatsMeat && (eatsMeat == false)) {
  diet = "vegetarian";
} else {
  diet = "no dietary restrictions";
}
console.log(diet);
/*
8)
Escriu el codi per a la següent situació:
La Sofia sap conduir cotxes de canvi manual.
El Diego només sap conduir cotxes automàtics.
La Sofia prefereix conduir distàncies llargues (> 10 km).
El Diego prefereix conduir distàncies curtes.

text output:
console.log("The car is ", car, " and the distance is ", distance, "km, so the driver is: ", driver);
*/
problemNumber(8);

const car = "manual";
const driver = null;
const distance = 12;

if (car == "manual" || distance > 10) {
  driver = "sofia";
} else {
  diver = "diego";
}
console.log("The car is ", car, " and the distance is ", distance, "km, so the driver is: ", driver);
/*
9)
Completa aquest codi!
Actualitza "canVote" al següent:
- "Input is not a number" si l'edat no és un número
(fes servir "typeof" per comprovar-ho - mira la documentació MDN)
- "Legal voting age" si l'edat és com a mínim 18 anys
- "Too young" si és més jove de 18 anys

text output:
console.log(canVote);
*/
problemNumber(9);

const age = 16;
let canVote = null;

/*
10)
Elimina els "nested conditionals" del següent codi
a partir de l'ordre de les operacions.
També has d'afegir la condició de temperatura
entre 15 i 30 graus (hauria de ser "warm").

text output:
console.log("The temp is ", temp, ", so the weather is ", weather);
*/
problemNumber(10);

let temp;

if (temp < 15) {
  if (temp < 0) {
    weather = "freezing";
  } else {
    weather = "chilly";
  }
} else if (temp > 30) {
  weather = "hot";
}
console.log("The temp is ", temp, ", so the weather is ", weather);
/*
11)
Descomenta tot el teu codi anterior.
- Reescriu el problema 3 i 4 fent servir "ternary operators".
- Reescriu també el problema 9 fent servir "ternary operators".
Fes-ho per les següents dues situacions:
  a) pots assumir que el tipus de "age" serà "number" i per tant
  no cal fer la comprovació.
  b) comprova el tipus de "age" tal i com està a l'exercici original.
  En aquest cas necessitaràs ajuntar dos "ternary operators".
  Quin creus que és el codi més net (clean code) que la teva
  resposta original al problema 9?

*/
problemNumber(11);
