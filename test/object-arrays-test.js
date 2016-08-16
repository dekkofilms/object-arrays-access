var chai = require('chai');
var expect = chai.expect;
var objectArrays = require('../objectArrays');

describe('objectArrays', function() {
  describe('#outputHobbit', function() {
    it('should return The Hobbit', function() {
      var result = objectArrays.outputHobbit();

      var expectedResult = "The Hobbit";

      expect(result).to.equal(expectedResult);
    })
  })
});

describe('objectArrays', function() {
  describe('#outputNutshell', function() {
    it('should return The Universe in a Nutshell', function() {
      var result = objectArrays.outputNutshell();

      var expectedResult = "The Universe in a Nutshell";

      expect(result).to.equal(expectedResult);
    })
  })
});

describe('objectArrays', function() {
  describe('#outputSongs', function() {
    it('should return all songs in array', function() {
      var result = objectArrays.outputSongs();

      var expectedResult = 'Call Me Maybe' + '\n' + 'Pacabel\'s Cannon in D' + '\n' + 'Smells Like Teen Spirit';

      expect(result).to.equal(expectedResult);
    })
  })
});

describe('objectArrays', function() {
  describe('#carRiders', function() {
    it('should return the person and the car they drive in one string', function() {
      var result = objectArrays.carRiders();

      var expectedResult = "Kelly drives a Chevy Tahoe" + '\n' + "Steve drives a Ford Fiesta" + '\n' + "Georgio drives a Toyota Yaris" + '\n' + "Fabio drives a Honda Fit";

      expect(result).to.equal(expectedResult);
    })
  })
});

describe('objectArrays', function() {
  describe('#trilogyPrintOut', function() {
    it('should return all the movies in this array', function() {
      var result = objectArrays.trilogyPrintOut();

      var expectedResult = "The Fellowship of the Ring, The Two Towers, The Return of the King, The Empire Strikes Back, Return of the Jedi, A New Hope, Back to the Future, Back to the Future II, Back to the Future III, The Hunger Games, Catching Fire, Mockingjay, The Matrix, The Matrix Reloaded, The Matrix Revolutions, Harry Potter and the Sorcerer's Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Askaban, Harry Potter and the Goblet of Fire, Harry Potter and the Half Blood Prince, Harry Potter and the Order of the Phoenix, Harry Potter and the Deathly Hollows, The Hitchhiker's Guide to the Galaxy, The Restaurant at the End of the Universe, Life, the Universe and Everything, So Long, and Thanks for All the Fish, Mostly Harmless, And Another Thing...";

      expect(result).to.equal(expectedResult);
    })
  })
});

describe('objectArrays', function() {
  describe('#trilogyLast', function() {
    it('should return the last movie in the trilogy', function() {
      var result = objectArrays.trilogyLast();

      var expectedResult = "The Return of the King, A New Hope, Back to the Future III, Mockingjay, The Matrix Revolutions, Harry Potter and the Deathly Hollows, And Another Thing...";

      expect(result).to.equal(expectedResult);
    })
  })
});

describe('objectArrays', function() {
  describe('#trilogyFirst', function() {
    it('should return the first movie in the trilogy', function() {
      var result = objectArrays.trilogyFirst();

      var expectedResult = "The Fellowship of the Ring, The Empire Strikes Back, Back to the Future, The Hunger Games, The Matrix, Harry Potter and the Sorcerer's Stone, The Hitchhiker's Guide to the Galaxy";

      expect(result).to.equal(expectedResult);
    })
  })
});
