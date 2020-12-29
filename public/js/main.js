// EXO 1

// - Afficher la longueur de la phrase
let phrase = 'Bonjour tout le monde    ';

console.log(phrase.length);

// - Enlever l'espace à la fin grâce à une méthode
phrase = phrase.trimEnd();
// console.log(phrase.trim());

// - Reafficher la longueur de la phrase
console.log(phrase.length);

// - Afficher uniquement la dernière lettre de la phrase
// console.log(phrase.substr(20));
// console.log(phrase.substring(20));

console.log(phrase.charAt(phrase.length -1));

// - Enlever "Bonjour" de la phrase
phrase = phrase.substring(8);
console.log(phrase);
// phrase = phrase.replace("Bonjour tout le monde", " ");
// console.log(phrase);

// - Remettre "Bonjour" au debut de la phrase grâce à une méthode
let hello = 'Bonjour';
phrase = hello.concat(" ", phrase);
console.log(phrase);

// - Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
phrase = phrase.substring(0,8);
console.log(phrase);

// - Remplacer dans la phrase le mot "number" par le mot "string"
//     - ```let phrase2 = "Ceci est une variable de type number !"```
let phrase2 = 'Ceci est une variable de type number !';
phrase2 = phrase2.replace("number", "string");
console.log(phrase2);


// - Mettre tous les number dans la phrase en minuscule
//     - ```let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"```
let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
phrase3 = phrase3.replace(/number/ig, "number"); 
console.log(phrase3);