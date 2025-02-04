const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    test('convertHandler should correctly read a whole number input', function () {
        const input = '32kg';
        const result = convertHandler.getNum(input);
        assert.equal(result, 32, 'Whole number input should be correctly parsed');
    });

    test('convertHandler should correctly read a decimal number input', function () {
        const input = '3.5kg';
        const result = convertHandler.getNum(input);
        assert.equal(result, 3.5, 'Decimal number input should be correctly parsed');
    });

    test('convertHandler should correctly read a fractional input', function () {
        const input = '1/2kg';
        const result = convertHandler.getNum(input);
        assert.equal(result, 0.5, 'Fractional input should be correctly parsed');
    });

    test('convertHandler should correctly read a fractional input with a decimal', function () {
        const input = '3/2.5kg';
        const result = convertHandler.getNum(input);
        assert.equal(result, 1.2);
    });

    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function () {
        const input = '3/2/3kg';

        let errorThrown = false;

        try {
            convertHandler.getNum(input);
        } catch (e) {
            errorThrown = true;
        }
        assert.equal(errorThrown, true);
    });

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function () {
        const input = 'kg';
        const result = convertHandler.getNum(input);
        assert.equal(result, 1);
    });

    test('convertHandler should correctly read each valid input unit', function () {
        const input1 = '32kg';
        const input2 = '32L';
        const input3 = '32mi';
        const input4 = '32km';
        const input5 = '32lbs';
        const input6 = '32gal';

        const result1 = convertHandler.getUnit(input1);
        const result2 = convertHandler.getUnit(input2);
        const result3 = convertHandler.getUnit(input3);
        const result4 = convertHandler.getUnit(input4);
        const result5 = convertHandler.getUnit(input5);
        const result6 = convertHandler.getUnit(input6);

        assert.equal(result1, 'kg');
        assert.equal(result2, 'L');
        assert.equal(result3, 'mi');
        assert.equal(result4, 'km');
        assert.equal(result5, 'lbs');
        assert.equal(result6, 'gal');
    });

    test('convertHandler should correctly return an error for an invalid input unit', function () {
        const input = '32abc';

        let errorThrown = false;

        try {
            convertHandler.getUnit(input);
        } catch (e) {
            errorThrown = true;
        }
        assert.equal(errorThrown, true);
    });

    test('convertHandler should return the correct return unit for each valid input unit', function () {
        const input1 = 'kg';
        const input2 = 'L';
        const input3 = 'mi';
        const input4 = 'km';
        const input5 = 'lbs';
        const input6 = 'gal';

        const result1 = convertHandler.getReturnUnit(input1);
        const result2 = convertHandler.getReturnUnit(input2);
        const result3 = convertHandler.getReturnUnit(input3);
        const result4 = convertHandler.getReturnUnit(input4);
        const result5 = convertHandler.getReturnUnit(input5);
        const result6 = convertHandler.getReturnUnit(input6);

        assert.equal(result1, 'lbs');
        assert.equal(result2, 'gal');
        assert.equal(result3, 'km');
        assert.equal(result4, 'mi');
        assert.equal(result5, 'kg');
        assert.equal(result6, 'L');
    });

    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function () {
        const input1 = 'kg';
        const input2 = 'L';
        const input3 = 'mi';
        const input4 = 'km';
        const input5 = 'lbs';
        const input6 = 'gal';

        const result1 = convertHandler.spellOutUnit(input1);
        const result2 = convertHandler.spellOutUnit(input2);
        const result3 = convertHandler.spellOutUnit(input3);
        const result4 = convertHandler.spellOutUnit(input4);
        const result5 = convertHandler.spellOutUnit(input5);
        const result6 = convertHandler.spellOutUnit(input6);

        assert.equal(result1, 'kilograms');
        assert.equal(result2, 'liters');
        assert.equal(result3, 'miles');
        assert.equal(result4, 'kilometers');
        assert.equal(result5, 'pounds');
        assert.equal(result6, 'gallons');
    });

    test('convertHandler should correctly convert gal to L', function () {
        const input = '5gal';
        const number = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const result = convertHandler.convert(number, unit);
        assert.equal(result, 18.92705);
    });

    test('convertHandler should correctly convert L to gal', function () {
        const input = '5L';
        const number = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const result = convertHandler.convert(number, unit);
        assert.equal(result, 1.32086);
    });

    test('convertHandler should correctly convert mi to km', function () {
        const input = '5mi';
        const number = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const result = convertHandler.convert(number, unit);
        assert.equal(result, 8.0467);
    });

    test('convertHandler should correctly convert km to mi', function () {
        const input = '5km';
        const number = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const result = convertHandler.convert(number, unit);
        assert.equal(result, 3.10686);
    });

    test('convertHandler should correctly convert lbs to kg', function () {
        const input = '5lbs';
        const number = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const result = convertHandler.convert(number, unit);
        assert.equal(result, 2.26796);
    });

    test('convertHandler should correctly convert kg to lbs', function () {
        const input = '5kg';
        const number = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const result = convertHandler.convert(number, unit);
        assert.equal(result, 11.02312);
    });
});