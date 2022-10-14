// Final solution:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
// GET Quand on appelle un nom, il devient _nom
        get name() {
// On note l'usage de THIS pour chercher une propriété dans dogFactory
            return this._name;
        },
// SET Quand on insère un nom, on l'enregistre dans _name (pas de vérification ici)
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}

console.log(dogFactory('Joe', 'Pug', 27));

