// EXO 1
// - ```let phrase = 'Bonjour tout le monde      '```
// - Afficher la longueur de la phrase
let phrase = 'Bonjour tout le monde    ';
console.log(phrase.length);

// - Enlever l'espace à la fin grâce à une méthode
console.log(phrase.trim());

// - Reafficher la longueur de la phrase
console.log(phrase.length);

// - Afficher uniquement la dernière lettre de la phrase
console.log(phrase.substr(-5));

// - Enlever "Bonjour" de la phrase
console.log(phrase.slice(8, 45));

// - Remettre "Bonjour" au debut de la phrase grâce à une méthode
console.log(phrase.slice(0, 45));

// - Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
console.log(phrase.slice(0, 7));

// - Remplacer dans la phrase le mot "number" par le mot "string"
//     - ```let phrase2 = "Ceci est une variable de type number !"```
let phrase2 = 'Ceci est une variable de type number !'
const regex = /number/gi;
console.log(phrase2.replace(regex, 'string'));


// - Mettre tous les number dans la phrase en minuscule
//     - ```let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"```
let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
console.log(phrase3.toLowerCase());