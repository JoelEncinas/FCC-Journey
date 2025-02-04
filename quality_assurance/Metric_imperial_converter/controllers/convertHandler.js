function ConvertHandler() {

  this.getNum = function (input) {
    const regex = /^\s*(\d+(?:\.\d+)?\/\d+(?:\.\d+)?|\d+(?:\.\d+)?)([a-zA-Z]+)?$/;
    const hasNumber = /\d/.test(input);

    if (!hasNumber) return 1;

    const match = input.match(regex);

    if (!match) {
      throw new Error('Invalid input format');
    }

    const numericPart = match[1];

    let value;
    if (numericPart.includes('/')) {
      const [numerator, denominator] = numericPart.split('/').map(Number);
      if (denominator === 0 || isNaN(numerator) || isNaN(denominator)) {
        throw new Error('Invalid number');
      }
      value = (numerator / denominator).toFixed(5);
    } else {
      value = parseFloat(numericPart);
    }

    return parseFloat(value);
  };

  this.getUnit = function (input) {
    const validUnits = ['kg', 'lbs', 'mi', 'km', 'l', 'gal'];

    const unitRegex = /[a-zA-Z]+$/;
    const matchUnit = input.match(unitRegex);

    if (!matchUnit) {
      throw new Error('Invalid unit');
    }

    const unit = matchUnit[0].toLowerCase();

    if (!validUnits.includes(unit)) {
      throw new Error('Invalid unit');
    }

    return unit === 'l' ? 'L' : unit;
  };

  this.getReturnUnit = (initUnit) => {
    const returnUnits = {
      kg: 'lbs',
      lbs: 'kg',
      mi: 'km',
      km: 'mi',
      L: 'gal',
      gal: 'L'
    };

    return returnUnits[initUnit];
  };

  this.spellOutUnit = (unit) => {
    const units = {
      "kg": "kilograms",
      "lbs": "pounds",
      "mi": "miles",
      "km": "kilometers",
      "gal": "gallons",
      "L": "liters"
    };
    return units[unit];
  };

  this.convert = function (initNum, initUnit) {
    const conversionFactors = {
      gal: 3.78541,
      L: 1 / 3.78541,
      lbs: 0.453592,
      kg: 1 / 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934
    };

    return parseFloat((initNum * conversionFactors[initUnit]).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };

}

module.exports = ConvertHandler;
