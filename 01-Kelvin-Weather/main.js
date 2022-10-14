// Initialisation de la variable Kelvin à 293
const kelvin = 0;
// Définition du degré celsius
const celsius = kelvin - 273;
// Définition du degré fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// On arrondit le calcul
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
