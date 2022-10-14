class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

    get title() {
      return this._title;
    }

    get isCheckedOut() {
      return this._isCheckedOut;
    }

    get ratings() {
      return this._ratings;
    }

    set isCheckedOut(key) {
      this._isCheckedOut = key;
    }

// Si _isCheckedOut est vrai, la valeur devient fausse et inversement.
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating () {
      let sum = this.ratings.reduce((accumulator, rating) => accumulator + rating, 0);  
      return  Math.floor(sum / this._ratings.length);
    }

    addRating (arg) {
      this._ratings.push(arg);
    }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._runTime = runTime;
    this._director = director;
  }

  get runTime() {
    return this._runTime;
  }

  get director() {
    return this._director;
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

speed.getAverageRating();
console.log(speed.getAverageRating())