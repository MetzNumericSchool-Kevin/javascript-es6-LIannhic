/**
 * Exercice 1
 * Template literals
 */

// Exercice 1.1 : Transforme la concaténation en interpolation de chaîne de caractères avec les backticks `
function afficheAddresse(address) {
  return (
    "Votre adresse est : " +
    address.street +
    ", " +
    address.city +
    ", " +
    address.country +
    "."
  );
}

console.log("Exercice 1.1");
console.log(
  afficheAddresse({
    street: "10 rue de la republique",
    city: "Paris",
    country: "France",
  })
);

// Définition d'une fonction afficheAddresse modifiée 
function afficheAddresseMod(address){
  // Retourner une phrase formatée en utilisant la synthaxe d'interpolation les propriétés du paramètre 'address'
  return `Votre adresse est : ${address.street}, ${address.city}, ${address.country}.`;
}

console.log("Solution 1.1"); // pour la lisibilité 
console.log(
  afficheAddresseMod({
    street: "10 rue de la republique",
    city: "Paris",
    country: "France",
  })
);
console.log(""); // pour la lisibilité


// Exercice 1.2 : Utilise les chaînes multilignes avec les backticks ` pour afficher plus simplement le menu
console.log("Exercice 1.2");
console.log(
  "Menu de la semaine :\n    - Pâte à tartine\n    - Hoagie\n    - Salade de pommes"
);

// Chaîne de caractère transformé
console.log("Solution 1.2");
console.log(
  `Menu de la semaine :
    - Pâte à tartine
    - Hoagie
    - Salade de pommes`
);
console.log("");

/**
 * Exercice 2
 * Décomposition (Destructuring)
 */

const colors = ["Red", "Green", "Blue", "Yellow"];

// Exercice 2.1 : Utilise la décomposition pour créer les constantes de couleurs plutôt que d'accéder aux indices
const red = colors[0];
const green = colors[1];
const blue = colors[2];
const yellow = colors[3];

console.log("Exercice 2.1");
console.log(red, green, blue, yellow);

const [redMod, greenMod, blueMod, yellowMod] = colors;

console.log("Solution 2.1");
console.log(redMod, greenMod, blueMod, yellowMod);
console.log("");

// Exercice 2.2 : La même chose, mais en ignorant ici "Red" et "Yellow"
const green2 = colors[1];
const blue2 = colors[2];

console.log("Exercice 2.2");
console.log(green2, blue2);

// Déclaration et affectation par décomposition en ignorant certaines valeur
const [, green2Mod, blue2Mod, ]= colors;

console.log("Solution 2.2");
console.log(green2Mod, blue2Mod);
console.log("");

// ------ Version objet

const roman = {
  title: "Solo Leveling",
  editor: "kbooks",
  tome: 12,
  type: "fantasy",
  author: "Chugong",
  mainCharacter: {
    name: "Sung Jinwoo",
    animeJapaneseVoice: "Taito Ban",
  },
  characters: [
    {
      name: "Sung Jinah",
      animeJapaneseVoice: "Haruna Mikawa",
    },
    {
      name: "Go Gunhee",
      animeJapaneseVoice: "Banjō Ginga",
    },
  ],
};

// Exercices 2.3 : Décompose l'objet pour récupérer le titre, l'éditeur et le tome dans des constantes
const title = roman.title;
const editor = roman.editor;
const tome = roman.tome;

console.log("Exercice 2.3");
console.log(title, editor, tome);

// 
const {title: titleMod, editor: editorMod, tome: tomeMod} = roman;

console.log("Solution 2.3");
console.log(titleMod, editorMod, tomeMod);
console.log("");

// Exercice 2.4 : Décompose l'objet pour récupérer le nom du personnage principal,
// le nom du premier personnage secondaire
// et la voix Japonaise dans l'anime du second personnage secondaire
const mainCharacterName = roman.mainCharacter.name;
const secondCharacterName = roman.characters[0].name;
const thirdCharacterJapaneseVoice = roman.characters[1].animeJapaneseVoice;

console.log("Exercice 2.4");
console.log(
  mainCharacterName,
  secondCharacterName,
  thirdCharacterJapaneseVoice
);


const {mainCharacter: {name: mainCharacterNameMod}, characters: [{name: secondCharacterNameMod},{animeJapaneseVoice: thirdCharacterJapaneseVoiceMod}]} = roman;

console.log("Solution 2.4");
console.log(
  mainCharacterNameMod,
  secondCharacterNameMod,
  thirdCharacterJapaneseVoiceMod
);
console.log("");

// ------

let firstname = "John";
let lastname = "Doe";

// Exercice 2.5 : Faites l'inversion du prénom et nom avec la décomposition
// plutôt qu'avoir une variable temporaire
let temp = firstname;
firstname = lastname;
lastname = temp;

console.log("Exercice 2.5");
console.log(firstname, lastname);

// Réaffection les ancienne valeurs des variables firstname et lastname
firstname = "John";
lastname = "Doe";
// affectation par décomposition
[firstname, lastname] = [lastname, firstname] // Merci chatgpt
// affichage de la réponse
console.log("Solution 2.5");
console.log(firstname, lastname);
console.log("");

// ------
const person = {
  firstname,
  lastname,
  age: 30,
  location: "Paris",
};

// Exercice 2.6 : Fais une décomposition du paramètre pour extraire directement le prénom et le nom
function hello(person) {
  console.log(`Bonjour ${person.firstname} ${person.lastname} !`);
};

console.log("Exercice 2.6");
hello(person);

// mettre un commentaire ici
function helloMod({firstname, lastname}) {
  console.log(`Bonjour ${firstname} ${lastname} !`);
};

console.log("Solution 2.6");
helloMod(person);
console.log("");

/**
 * Exercice 3
 * Opérateur de reste ...
 */

// Exercice 3.1 : Décompose le tableau colors pour ne garder dans le reste que les couleurs bleue et jaune
const restOfColors = [];

restOfColors.push(colors[2]);
restOfColors.push(colors[3]);

console.log("Exercice 3.1");
console.log(restOfColors);

// rappel des valeurs dans le tableau colors ["Red", "Green", "Blue", "Yellow"]
const [red3Mod, green3Mod, ...restOfColorsMod] = colors;

console.log("Solution 3.1");
console.log(restOfColorsMod);
console.log("");

// Exercice 3.2 : Décompose l'objet, de telle sorte à ce que le reste contienne seulement les clés
// titre, editeur, tome, auteur

const roman2 = {};
roman2.title = roman.title;
roman2.editor = roman.editor;
roman2.tome = roman.tome;
roman2.author = roman.author;

console.log("Exercice 3.2");
console.log(roman2);

// rappel de l'objet roman {title:"Solo Leveling",editor:"kbooks",tome:12,type:"fantasy",author:"Chugong",mainCharacter:{name:"Sung Jinwoo",animeJapaneseVoice:"Taito Ban",},characters:[{name:"Sung Jinah",animeJapaneseVoice: "Haruna Mikawa",},{name:"Go Gunhee",animeJapaneseVoice:"Banjō Ginga",},],};
const {type: typeMod, mainCharacter: mainCharacterMod, characters: charactersMod, ...restOfRomanMod} = roman
console.log("Solution 3.2");
console.log(restOfRomanMod);
console.log("");

// ------
const randomNumbers = [12, 13, 52, 68, 2, 23, 5];

// Exercice 3.3 : Math.min prend un nombre indéfini d'arguments
// Utilise l'opérateur de reste pour pouvoir passer un tableau
console.log("Exercice 3.3");
console.log(Math.min(12, 13, 52, 68, 2, 23, 5));

console.log("Solution 3.3");
console.log(Math.min(...randomNumbers));
console.log("");

// Exercice 3.4 : Transforme cette fonction pour qu'elle puisse prendre
// un nombre indéfini de paramètres car actuellement elle en prend que 3
function min(a, b, c) {
  return Math.min(a, b, c);
}

console.log("Exercice 3.4");
console.log(min(12, 13, 52, 68, 2, 23, 5)); // Le résultat doit être 2

// Définir une fonction minMod
function minMod(...args) {
  return Math.min(...args);
};

console.log("Solution 3.4");
console.log(minMod(12, 13, 52, 68, 2, 23, 5,));
console.log("");

/**
 * Exercice 4
 * Opérateur de dispersion (spread)
 */

// Exercice 4.1 : Utilise l'opérateur de dispersion pour ajouter "Pink" et "Magenta" dans un nouveau tableau
const moreColors = colors.concat("Pink", "Magenta");

console.log("Exercice 4.1");
console.log(moreColors);

// ok
const colorsMod = ["Red", "Green", "Blue", "Yellow"];
const moreColorsMod = [...colorsMod, "Pink", "Magenta"];

console.log("Solution 4.1");
console.log(moreColorsMod);
console.log("");

// Exercice 4.2 : Utilise l'opérateur de dispersion pour créer un nouveau tableau
// où Red est ajouté au début, et "Violet" à la fin
const partialRainbow = ["Orange", "Yellow", "Green", "Blue", "Indigo"];
const rainbow = ["Red"].concat(partialRainbow, ["Violet"]);

console.log("Exercice 4.2");
console.log(rainbow);

// 
const partialRainbowMod = ["Orange", "Yellow", "Green", "Blue", "Indigo"];
const rainbowMod = ["Red",...partialRainbowMod, "Violet"];

console.log("Solution 4.2");
console.log(rainbowMod);
console.log("");

// Exercice 4.3 : Copier l'adresse en ajoutant une nouvelle clé pour le code postal
const adress = {
  street: "10 rue de la republique",
  city: "Paris",
  country: "France",
};

const completeAdress = Object.assign({}, adress, { postalCode: 75001 });

console.log("Exercice 4.3");
console.log(completeAdress);

// Ma réponse
const adressMod = {
  streetMod: "10 rue de la republique",
  cityMod: "Paris",
  countryMod: "France",
};

const completeAdressMod = {...adressMod,  postalCode: 75001 };

console.log("Solution 4.3");
console.log(completeAdressMod);
console.log("");

// Exercice 4.4 : Utilise l'opérateur de dispersion pour copier l'objet person et modifier la valeur de l'age à 20
const person2 = Object.assign({}, person, { age: 20 });

console.log("Exercice 4.4");
console.log(person2);

// L'objet person a une propriété age à la valeur 30
const person2Mod = { ...person,  age: 20 };

console.log("Solution 4.4");
console.log(person2Mod);
console.log("");

/**
 * Exercice 5
 * Fonctions fléchées
 */

// Exercice 5.1 : Convertir en fonction fléchée
const thatsAllFolks = function () {
  console.log("That's all folks!");
};

console.log("Exercice 5.1");
thatsAllFolks();

// Heu... j'applique le cours
const thatsAllFolksMod = () => {
  console.log("That's all folks!");
};

console.log("Solution 5.1");
thatsAllFolksMod();
console.log("");

// Exercice 5.2 : Convertir toutes les fonctions en fonction fléchée
// Et si c'est possible, faire un return implicite
const makeDouble = function (numbers) {
  return numbers.map(function (number) {
    const newNumber = number * 2;
    return newNumber;
  });
};

console.log("Exercice 5.2");
console.log(makeDouble([1, 2, 3]));

// 
const makeDoubleMod = (numbers) => numbers.map((number) => {
  // Retour implicite impossible, il y a deux consignes ?!
  const newNumber = number * 2;
  return newNumber;
});

console.log("Solution 5.2");
console.log(makeDoubleMod([1, 2, 3]));
console.log("");

// Exercice 5.3 : Convertir en fonction fléchée avec un return implicite
function convertToPerson(firstnameLastnameTuple) {
  return {
    firstname: firstnameLastnameTuple[0],
    lastname: firstnameLastnameTuple[1],
  };
}

console.log("Exercice 5.3");
console.log(convertToPerson(["John", "Doe"]));

// 
const convertToPersonMod = (firstnameLastnameTuple) => ({
    firstname: firstnameLastnameTuple[0],
    lastname: firstnameLastnameTuple[1],
  });

console.log("Solution 5.3");
console.log(convertToPersonMod(["John", "Doe"]));
console.log("");

/**
 * Exercice 6
 * Syntaxe raccourcie d'assignation d'objets
 */

// Exercice 6 : raccourci l'assignation à l'objet

function convertToPerson2([firstname, lastname]) {
  return {
    firstname: firstname,
    lastname: lastname,
  };
}

console.log("Exercice 6");
console.log(convertToPerson2(["John", "Doe"]));

//
const convertToPerson2Mod = ([firstname, lastname]) => ({firstname,lastname,})

console.log("Solution 6");
console.log(convertToPerson2Mod(["John", "Doe"]));
console.log("");


/**
 * Exercice 7
 * Modules import / export
 */

// Exercice 7 : Voici un exemple de code pour gérer un panier d'achat
// On souhaite pouvoir utiliser ce code à plusieurs endroits dans un projet
// On souhaite également le faire pour éviter d'exposer la constante cart
// qui pourrait être modifiée par erreur
//
// Migre ce code dans un module, importe le nécéssaire pour l'utiliser

// const cart = [];

// function addToCart(productInfo, quantity = 1) {
//   const cartLine = findItemInCart(productInfo.product);

//   if (cartLine) {
//     cartLine.quantity += quantity;
//     return;
//   }

//   cart.push({ ...productInfo, quantity });
// }

// function findItemInCart(productName) {
//   return cart.find((cartLine) => cartLine.product === productName);
// }

// function updateCartQuantity(productName, quantity) {
//   const cartLine = findItemInCart(productName);

//   if (!cartLine) {
//     addToCart(productName, quantity);
//     return;
//   }

//   cartLine.quantity = quantity;
// }

// function computeTotal() {
//   return cart.reduce(
//     (total, cartLine) => total + cartLine.quantity * cartLine.price,
//     0
//   );
// }

// function displayAmount(amount) {
//   return Intl.NumberFormat("fr-FR", {
//     style: "currency",
//     currency: "EUR",
//   }).format(amount); 
// }

import exercice from "./exercice.js"

console.log("Exercice 7");

console.log("Ajout d'un Shampoing x2 à 10€");
exercice.addToCart({ product: "Shampoing", price: 10 }, 2);

console.log("Mise à jour du panier : Shampoing x4");
exercice.updateCartQuantity("Shampoing", 4);

console.log("Ajout d'un Biscuit x10 à 3€");
exercice.addToCart({ product: "Biscuit", price: 3 }, 10);

console.log("Ajout d'un Biscuit x2 à 3€");
exercice.addToCart({ product: "Biscuit", price: 3 }, 2);

console.log("Affichage du total panier :");
console.log(exercice.displayAmount(exercice.computeTotal()));
console.log("");

/**
 * Exercice 8
 * Operation asynchrone
 */

// Exercice 8 : Transforme les opérations asynchrone avec la syntaxe async/await

function loadFruits() {
  return fetch("http://127.0.0.1:3000/data/fruits.json").then((response) =>
    response.json()
  );
}

function program() {
  loadFruits()
    .then((fruits) => console.log(fruits))
    .catch((error) =>
      console.log("Problème lors du chargement des fruits", error)
    );
}

console.log("Exercice 8");
program();

// Définition d'une fonction asynchrone pour charger les fruits depuis un fichier JSON
async function loadFruitsMod() {
  try {
    // Envoie une requête HTTP pour récupérer le fichier "fruits.json"
    const response = await fetch("http://127.0.0.1:3000/data/fruits.json");

    // Convertit la réponse en format JSON et la retourne
    return await response.json();
  } catch (error) {
    // Si une erreur survient (ex : problème réseau, fichier introuvable...), on l'affiche
    console.error("Erreur lors du chargement des fruits :", error);

    // On relance l'erreur pour que la fonction appelante puisse aussi la gérer
    throw error;
  }
}

// Définition d'une fonction asynchrone pour exécuter le programme
async function programMod() {
  try {
    // Appelle la fonction loadFruits() et attend que les données soient chargées
    const fruits = await loadFruitsMod();

    // Affiche la liste des fruits dans la console
    console.log(fruits);
  } catch (error) {
    // Si une erreur survient, on affiche un message d'erreur
    console.log("Problème lors du chargement des fruits", error);
  }
}

// Affiche un message pour indiquer le début de l'exercice
setTimeout(()=>{
  console.log("Solution 8");
  // Appelle la fonction principale du programme
  programMod()}, 1000);
