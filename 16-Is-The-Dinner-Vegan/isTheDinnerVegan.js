// Relire attentivement la syntaxe pour les ITERATORS
function isTheDinnerVegan(arr) {
    const veg = arr.map((food) => food.source); // .map permet de transformer une matrice selon conditions
    const veg2 = veg.every((food) => food === "plant"); // .every est utilisé comme iterator pour analyser un tableau et renvoyer true/false selon les conditions posées
    console.log(veg); // On créé un tableau avec uniquement les sources
    return veg2;
  }
  
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" },
    { name: "dessert twinkies", source: "unknown" },
  ];
  
  console.log(isTheDinnerVegan(dinner));
  