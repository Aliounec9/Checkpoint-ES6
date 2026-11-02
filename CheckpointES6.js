// https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript
function isSquare(arr){
  if (arr.length === 0){
    return undefined
  }
  return arr.every (x => Number.isInteger(Math.sqrt(x)));
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  return (str.match(/[aioue]/g) || []).length;
}

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
}

// https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
  return (number * -1)
}

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  return s
  .split('')
  .map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i))
  .join('-')
}

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
const isSquare = function(n){
  if (n < 0) return false;
  return Number.isInteger(Math.sqrt(n))
}

// https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
  return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
}

// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
  let i = 0;
  let j = 0;
  for (const char of str) {
    if (char == "x" || char == "X"){
      i = i + 1
    }
    if (char == "o" || char == "O"){
      j = j + 1
    }
  }
  if (i == j) {
      return true;
    } else {
      return false;
    }
}

// https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  return Number([...String(num)].map(char => char ** 2).join(''));
}

/*Les trois petits points ... s'appellent l'opérateur de décomposition (Spread Operator). 
 Ils prennent le texte "9119" et séparent chaque lettre/chiffre pour les mettre dans un tableau [].
 *La méthode .map() passe sur chaque élément du tableau un par un, applique une formule, 
 et crée un nouveau tableau avec les résultats.
*La méthode .join() fait exactement l'inverse du découpage. 
Elle prend tous les éléments du tableau et les colle les uns aux autres 
pour en faire une seule chaîne de caractères. Les guillemets vides '' au milieu indiquent 
qu'on ne veut aucun séparateur (pas de virgule, pas d'espace) entre les morceaux. */

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
function findShort(s){
  return Math.min(...s.split(' ').map(mot => mot.length));
}

/*La fonction mathématique Math.min() sert à trouver le plus petit nombre, 
mais elle ne sait pas lire un tableau directement 
(elle refuse d'analyser [2, 4, 4]). Les trois petits points ... permettent de "sortir" 
  les nombres du tableau pour les lui donner un par un.
  *La méthode .split(' ') coupe la phrase à chaque fois qu'elle rencontre un espace ' ' 
  et transforme le tout en un tableau de mots.
  * .map(). Cette fois, au lieu de calculer un carré, on demande la longueur de chaque mot (mot.length). 
  On transforme donc notre tableau de mots en un tableau de nombres.
  * La fonction mathématique Math.min() sert à trouver le plus petit nombre, 
  mais elle ne sait pas lire un tableau directement (elle refuse d'analyser [2, 4, 4]). 
  Les trois petits points ... permettent de "sortir" 
  les nombres du tableau pour les lui donner un par un.*/

  // https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function dnaStrand(dna){
  const paires = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  return [...dna].map(base => paires[base]).join('');
}

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
  return Number([...String(n)].sort((a, b) => b - a).join(''));
}

/*.sort((a, b) => b - a) (Le Tri décroissant). La méthode .sort() trie les éléments d'un tableau. 
En lui donnant la formule fléchée (a, b) => b - a, 
on lui indique explicitement de trier les chiffres du plus grand au plus petit.*/

// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  return arr.reduce((somme, num) => num > 0 ? somme + num : somme, 0);
}

/*1. arr.reduce(...) : Cette méthode prend deux paramètres principaux : 
une fonction de calcul et une valeur de départ (le 0 tout à la fin).
*(somme, num) => ... : La variable somme est notre panier qui accumule le total au fur et à mesure. 
*La variable num représente le nombre actuel que l'on examine dans le tableau.
num > 0 ? somme + num : somme : C'est une condition ternaire (une version compacte du if...else).*/

// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  return new Set(lowerStr).size === lowerStr.length;
  }

  /*• .toLowerCase() : Aligne toutes les lettres en minuscules pour ignorer la casse.
• new Set(...) : Crée une collection d'éléments uniques. Si une lettre se répète, 
le Set ne la garde qu'une seule fois.
• .size === .length : Si la taille du Set est identique à la longueur de la chaîne d'origine, 
cela signifie qu'aucune lettre n'a été éliminée, donc qu'il n'y a aucun doublon.*/