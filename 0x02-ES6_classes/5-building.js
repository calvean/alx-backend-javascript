export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // evacuation message
  evacuationWarningMessage() {
    console.log(`The building has ${this._sqft} square feet.`);
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
