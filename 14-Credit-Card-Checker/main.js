// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:


/// SOLUTION n°1 : SIMPLE

function validateCred(arr) {
    // Etape A : implémentation de l'algorithme de Luhn
    // Etape A1 : inverser le tableau
    let reverseArr = [...arr].reverse() //... est le SPREAD OPERATOR pour éclater le tableau en un nombre fini de valeur, ici pour appliquer le reverse à tous les tableaux
    // Etape A2 et A3 : pour chaque élément des sous-tableaux, multiplier les nombres dans les positions impaires par 2. Si le résultat est sup. à 9, soustraire par 9. Puis sommer tous les éléments obtenus pour chaque sous tableau.
    let sum = 0;
    for (let i = 0; i < reverseArr.length; i += 2) { // On initialise la boucle (on saute de nombre PAIRE en PAIRE avec i += 2)
      sum += reverseArr[i]; // On réalise la somme de chaque élément des sous-tableaux reserveArr[i], la matrice somme possèdera pour éléments toutes les sommes de tous les sous-tableaux
      if(reverseArr[i + 1]) { // On realise l'opération de l'étape 2 avec les nombres impaires (i+1)
        sum += reverseArr[i + 1] * 2;
        if (reverseArr[i + 1] * 2 > 9) {
          sum -= 9;
        }
      }
    }
    // Etape A4 : si la somme modulo 10 est 0, alors le tableau contient un code valide, sinon invalide, pour chaque sous tableau. 
    return sum % 10 === 0;
  }
  
  console.log(batch.map(validateCred))

  // Etape B : créer une fonction pour repérer les cartes invalides (false à l'étape précédente)
const findInvalidCards = arr => {
  let invalid = [];
  for (let i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === false) {
      invalid.push(arr[i]);
    }
  }
  return invalid;
};
  
console.log(findInvalidCards(batch));

// Etape C : créer une fonction pour identifier les entreprises émetrices de mauvaises cartes
const idInvalidCardCompanies = nestedArr => {
    let companies = [];
    let card = [];
  
    for (let i = 0; i < nestedArr.length; i++) {
      card = nestedArr[i];
  
      switch (card[0]) { // Vérifier le premier numéro de chaque carte
        case 3:
            company = "Amex"; // Identifier l'entreprise Amex dans le cas 3
            break;
          case 4:
            company = "Visa";
            break;
          case 5:
            company = "Mastercard";
            break;
          case 6:
            company = "Discover";
            break;
          default:
            console.log("Company not found");
        }
        if (!companies.includes(company)) { // il s'agit d'une solution pour éviter les doublons, si l'entreprise n'est PAS déjà incluse alors ..
          companies.push(company);
        }
      }
      return companies;
    };
  
  // Console.log comapnies who have used invalid cards
  console.log(idInvalidCardCompanies(findInvalidCards(batch)))

