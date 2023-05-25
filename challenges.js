/** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

/*
1)
console.log imprimirà qualsevol cosa que
hi hagi entre els parèntesis a la teva consola.

Canvia la frase a imprimir de sota, desa el fitxer,
i veuràs els canvis al teu navegador.

Després de confirmar que funciona, comenta"l.

*/problemNumber(1);
console.log("hola soy yo");

/*
2)
Fent servir tant l'operador (+) com l'operador (*),
multiplica i afegeix qualsevol combinació de números
per aconseguir imprimir el número 10.
*/
problemNumber(2);

console.log(7+3)
console.log(2*5)

/*
3)
Sovint fem servir console.log per fer `debug` (depurar errors).
Pots afegir diversos arguments a dins del parèntesi del
console.log (separant-los amb comes).
Afegeix el següent dins el console.log!

3 + 4, " should equal 7"
*/
problemNumber(3);

console.log(3 + 4)

/*
4)
Afegeix dos `strings` per imprimir
el teu nom i cognom conjuntament!
*/

problemNumber(4);
const nombre= "Maya ";
const apellido= "Vazquez";
console.log(nombre+apellido)

console.log("Maya Vazquez2")
console.log("Maya "+"Vazquez3")
 

/*
5)
L'operador `modulo` (%) ens retorna la resta
d'una divisió. Si dividim qualsevol número entre 2
podrem saber si és parell o senar. Prova-ho!
*/

problemNumber(5);

console.log(10 % 2)

/*
6)
Canvia la ubicació de Mia reassignant la variable
"currentLocation" amb un nou string!
Per fer-ho, hauràs d"afegir una nova línia de codi
(no eliminis cap de les línies de codi).
Nota: també hauràs de "descomentar" el console.log
per imprimir la localització.
*/

problemNumber(6);
const name = "Mia";
let currentLocation = "school";
currentLocation ="the beach";
console.log("ejercicio7:")
console.log( name, " is currently at ", currentLocation);

/*
7)
Crea variables per que el missatge s'imprimeixi
correctament a la consola!
*/
problemNumber(7);
/** Helper function code */


let person = " Suren"
let place = "Restaurant"
let food = " macarrones"

console.log(person, " went to the ", place, " to eat ", food, ".");

/*
8)
Ara, reassigna totes les variables anteriors per
imprimir un nou missatge a la consola!
*/
problemNumber(8);

let cohete = "El cohete"
let Marte = " Marte"
let aterrizar = "aterrizar"

console.log(cohete, " vuela a ",  Marte, " para ", aterrizar, ".");

/*
9) 
Existeixen tres formes d'incrementar
el número emmagatzemat a la variable "count".
Tot i així, hi ha un problema amb la forma en què
aquesta variable ha estat declarada. Corregeix-la!
*/
problemNumber(9);

let count = 0;
count = count + 1;
console.log (count)
count + 1;

count ++;
console.log(count, "should be 3");

/*
10)
Hora de permutar! Al codi de sota volem intercanviar
els valors emmagatzemats a "a" i "b".

El codi no funciona correctament. Per assolir aquesta
tasca hauràs de crear una variable adicional
(pots anomenar-la "temp") per desar "a" o "b" mentre
fas la permuta. Fes-te un esquema si ho necessites!
*/
problemNumber(10);

let a = 1;
let b = 2;
let c = null;

console.log("BEFORE > a is: ", a, " - and b is: ", b);

 a = b;
 b = a;
 c = c;

console.log("AFTER > a is: ", a, " - and b is: ", b);

/*
11)
Fes que la següent afirmació resulti "true"!
*/
problemNumber(11);

let numero = 3;
numero++;
numero++;
numero > 4;

console.log(3 < 4);

/*
12)
Fes que la següent afirmació resulti "false".
*/
problemNumber(12);

let x = 10;
let y = x++;

console.log(x <= y);

/*
13)
Soluciona l'operador de comparació per què
l'afirmació següent resulti "false".
*/
problemNumber(13);

console.log(3 === "3");

/*
14)
Modifica l'expressió de sota per què
no resulti "false".
*/
problemNumber(14);
const sunny = true;
const warm = true;

console.log(sunny !== warm);

/*
15)
Practica tot el que has après!

Inventa 10 expressions que facin servir el que
has après fins ara.
  - Fer servir els següents data types: `string`, `number`, `boolean`, `undefined` i `null`.
  - Fer servir els següents operadors: (+) (-) (\*) (/) (%).
  - Fer servir les paraules clau: var, const, let.
  - Fer servir els operadors: (=) (+=) (-=) (*=)(++) (- -).
  - Fer servir els operadors: (>) (<) (>=) (<=) (== vs ===) (!==).
*/

/*
14)
Usando string".
*/
problemNumber(15);

const myname = "Suren";
let othername = "Amanda";
console.log ( myname != othername);

problemNumber(16);
let z = 1;
let q = 3;
console.log (z > q);

problemNumber(17);
a += 5;
console.log (a > b);

problemNumber(18);

 a *= 2
console.log (a === "12")

problemNumber(19);

a = 6;
b = 3;
let resto = a % b; 
let division = a/b;
console.log (resto == "0")
console.log (division === 2)

problemNumber(20);

let shushi = null
let checknull = shushi == null
console.log (checknull == null)