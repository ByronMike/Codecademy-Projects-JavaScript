// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)] ;
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

// On créé une méthode .mutate() qui sélectionne aléatoirement une base dans l'objet dna (et qui modifie la base actuelle). Puis il renvoit le résultat obtenu. 
const pAequorFactory = (num, arr) => {
  return {
      specimenNum: num,
      dna: arr,
      mutate() {
          let randomIndex = Math.floor(Math.random() * (this.dna.length));
          let randomBase = ['A', 'T', 'C', 'G'].filter(base => base !== this.dna[randomIndex])[Math.floor(Math.random() * 3)] // Etape supplémentaire pour s'assurer qu'il n'y a pas de doublon dans le code dna.
          this.dna[randomIndex] = randomBase;
          return this.dna;
      },

      //  On créé une nouvelle méthode .compareDNA() qui vise à comparer l'adn rentré dans pAequor avec ceux des autres de pAequor et d'évaluer le taux de similitude (%) en commun. 

      compareDNA(pObj){
          const matchList = [...this.dna].filter((base,index) => { // On va filtrer tous les éléments dans dna.
              return base === pObj.dna[index]; /// On retient ceux qui matchent dans la séquence d'ADN.
          });
          const matchPercentage = Math.round((matchList.length * 100) / this.dna.length);
          console.log(`specimen #${this.specimenNum} and specimen #${pObj.specimenNum} have ${matchPercentage}% DNA in common`) 
      },

      // On créé une autre méthode .willLikelySurvive() qui retourne vrai s'il y a au moins 60% de C et G dans la séquence d'ADN, sinon faux. Ceci permettant d'évaluer les chances de survie de P. aequor.
      willLikelySurvive(){
          const cgList = [...this.dna].filter(base => base === 'C' || base === 'G');
          return Math.round((cgList.length * 100) / this.dna.length) >= 60;
      },

      // BONUS : .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. 
      complementStrand(){
          const baseCouple = {'A':'T','T':'A','C':'G','G':'C'};
          return [...this.dna].map(base => {
              return baseCouple[base];
          });
      }
  };
}




  


  
  