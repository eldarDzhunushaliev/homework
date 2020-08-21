"use strict";

const numberOfFilms = +prompt('How many films have you watched?', '');
if (numberOfFilms < 10) {
    alert("You've seen few films");
} else if (numberOfFilms < 30) {
    alert("You are an average customer");
} else {
    alert("Oh, you're an expirienced one");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastMovie = "",
    lastScore = 0,
    correctInput = false;

for (let i = 1; i<=2; i++) {
    do {
        lastMovie = prompt('Call one of the last films you seen', '');
        correctInput = (lastMovie != null) && (lastMovie != '') && (lastMovie.length < 50);
        if (!correctInput) {
            alert('Incorrect input. Repeat, please.');
        }
    } while (!correctInput);
    do {
        lastScore = +prompt('How do you rate it?', '');
        correctInput = (lastScore != null);
        if (!correctInput) {
            alert('Incorrect input. Repeat, please.');
        }
    } while (!correctInput);
    personalMovieDB.movies[lastMovie] = lastScore;
}

console.log(personalMovieDB);