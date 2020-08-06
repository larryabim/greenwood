//Require the dev-dependencies
var assert = require('assert');

describe('Sample test', () => {

    describe('Array', () => {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });

      it('should return 3 for length of array containing {1, 2, 3}', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });

    describe('Object', () => {
      it('should return John for first name of object', function () {
        var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        assert.equal(person.firstName, "John");
      });

      it('should return 50 for age of object', function () {
        var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        assert.equal(person.age, 50);
      });
    });

  });