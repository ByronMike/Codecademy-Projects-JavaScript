// Transformer un paragraphe en tableau, puis le modifier
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); // Transformer le texte en tableau, en découpant SPLIT() selon les espaces ' '
// L'étape suivante pour revenir en arrière, au texte est: console.log(storyWords.join(' ')); (voir en bas du programme)
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Compter le nombre de mots dans le paragraphe
let count = 0;
storyWords.forEach(word => {
  count++;
  console.log('Count: ' + count);
});

// On filtre le tableau de manière à disposer d'un tableau purgée du unnecessaryWord
storyWords = storyWords.filter(word => { 
  return word !== unnecessaryWord;
});

// On 'copie-colle' le tableau en remplaçant systématiquement le missepelWord par 'beautiful'
storyWords = storyWords.map(word => {
  if( word === misspelledWord){
    return word = 'beautiful';
  } else {
    return word;
  }
});

// On cherche l'index du badword
let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
  });

// On cherche à savoir si un mot a plus de 10 lettres..
let lengthCheck = storyWords.every(word => {
  return word.length < 10; 
});

// .. et si oui, où il se situe
let longWordIndex = storyWords.findIndex(word => {
  return word.length >= 10;
  });

// On identifie le mot et on le remplace par un mot de notre choix
console.log(storyWords[94]);
storyWords[94] = 'glorious';

storyWords[78] = 'really';

console.log(storyWords);
console.log(storyWords.join(' ')); // 

console.log(badWordIndex);
console.log(lengthCheck);
console.log(longWordIndex);
