module.exports = {
  outputHobbit: function () {
    var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

    return books[0];
  },

  outputNutshell: function () {
    var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

    return books[2];
  },

  outputSongs: function () {
    var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"];
    var answer = "";

    for (var i = 0; i < songs.length; i++) {
      if (i < (songs.length - 1)) {
        answer += songs[i] + '\n'
      } else {
        answer += songs[i];
      }
    }
    return answer;
  },

  carRiders: function () {
    var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"];
    var riders = ["Kelly", "Steve", "Georgio", "Fabio"];
    var answer = "";

    for (var i = 0; i < cars.length; i++) {
      if (i < (cars.length - 1)) {
        answer += riders[i] + ' drives a ' + cars[i] + '\n'
      } else {
        answer += riders[i] + ' drives a ' + cars[i];
      }
    }
    return answer;
  },

  trilogyPrintOut: function () {
    var trilogies = [
    ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
    ["The Empire Strikes Back","Return of the Jedi","A New Hope"],
    ["Back to the Future", "Back to the Future II", "Back to the Future III"],
    ["The Hunger Games", "Catching Fire", "Mockingjay"],
    ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
    ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
    ]

    var answer = "";

    for (var i = 0; i < trilogies.length; i++) {
      for (var j = 0; j < trilogies[i].length; j++) {
        answer += trilogies[i][j] + ", ";
      }
    }
    answer = answer.slice(0, -2);
    return answer;
  },

  trilogyLast: function () {
    var trilogies = [
    ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
    ["The Empire Strikes Back","Return of the Jedi","A New Hope"],
    ["Back to the Future", "Back to the Future II", "Back to the Future III"],
    ["The Hunger Games", "Catching Fire", "Mockingjay"],
    ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
    ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
    ]

    var answer = "";

    for (var i = 0; i < trilogies.length; i++) {
      answer = answer + trilogies[i].pop() + ", ";
    }
    return answer.slice(0,-2);
  },

  trilogyFirst: function () {
    var trilogies = [
    ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
    ["The Empire Strikes Back","Return of the Jedi","A New Hope"],
    ["Back to the Future", "Back to the Future II", "Back to the Future III"],
    ["The Hunger Games", "Catching Fire", "Mockingjay"],
    ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
    ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
    ]

    var answer = "";
    for (var i = 0; i < trilogies.length; i++) {
      answer += trilogies[i][0] + ", ";
    }
    return answer.slice(0, -2);
  }
}
