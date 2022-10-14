// Ajouter des propriétés à un objet avec SET ET lire les proprités avec conditions avec GET

const menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') { // typeof est important pour vérifier le type de caractère utilisé
      this._meal = mealToCheck;
      } else {
        console.log("not assigned correctly");
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log("not assigned correctly");
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for ${this._price}!`; 
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  };
  
  
  
  menu.price = 15;
  menu.meal = 'Bruschetta';
  console.log(menu);
  console.log(menu.todaysSpecial);
  