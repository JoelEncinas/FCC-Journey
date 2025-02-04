'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;

    if (input === '') {
      return res.json('invalid unit')
    }

    let number;
    let unit;
    let numberFlag = false;
    let unitFlag = false;
    let errMessage = '';

    try {
      number = convertHandler.getNum(input);
    } catch (error) {
      numberFlag = true;
    }

    try {
      unit = convertHandler.getUnit(input);
    } catch (error) {
      unitFlag = true;
    }

    if (numberFlag) errMessage = 'invalid number'
    if (unitFlag) errMessage = 'invalid unit'
    if (numberFlag && unitFlag) errMessage = 'invalid number and unit'

    if (numberFlag || unitFlag) {
      return res.json(errMessage)
    }

    let returnUnit = convertHandler.getReturnUnit(unit);
    let returnNum = convertHandler.convert(number, unit);

    return res.json(
      {
        initNum: number,
        initUnit: unit === 'l' ? 'L' : unit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: convertHandler.getString(number, unit, returnNum, returnUnit)
      }
    )
  })
};
