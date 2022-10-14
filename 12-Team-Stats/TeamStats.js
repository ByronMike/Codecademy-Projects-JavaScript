// Créer un tableau, afficher les éléments de cette base et ajouter des éléments à cette base

const team = {
    _players : [ // Les [] sont utiles pour créer le tableau
     {firstName : 'Thomas', lastName : 'Debierre', age : 23 },
    {firstName : 'Leo', lastName : 'Messi', age : 32 }, 
     { firstName : 'Roberto', lastName : 'Carlos',age : 24}
     ],
    _games : [
     {opponent : 'FC Barca', teamPoints : 2, opponentPoints : 2 },
     {opponent : 'Real Madrid', teamPoints : 3, opponentPoints : 1 }, 
     { opponent : 'Juventus', teamPoints : 0 ,opponentPoints : 2}
    ],
    get players() {
      return this._players; // Ne pas oublier THIS pour chercher dans l'objet team (pas uniquement dans _players)
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName,lastName,age) {
   let player = {
     firstName : firstName, // Pour créer une méthode (fonction dans un objet) : suivre ce format
     lastName : lastName, 
     age : age };
    this.players.push(player); //push() permet de rajouter les éléments relatifs à la méthode 'Player' dans players à un tableau
    },
    addGame(opponent,teamPoints,opponentPoints) {
   let game = {
     opponent, // Factory functions raccourci (object literals) => ES6+
     teamPoints, 
     opponentPoints};
     this.games.push(game);
    }, 
  }
  
  team.addPlayer("Jean-Michel", "Aulas", 108);
  team.addGame('Titans', 100, 98);
  
  console.log(team._players);
  console.log(team._games);
  