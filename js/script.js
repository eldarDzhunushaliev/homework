"use strict";

let numberOfFilms = 0,
    lastMovie = "",
    lastScore = 0,
    correctInput = false;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

do {
    numberOfFilms = prompt('How many films have you watched?', '');
    correctInput = !(isNaN(+numberOfFilms)) && (numberOfFilms != null) && (numberOfFilms != '');
    if (!correctInput) {
        alert('Incorrect input. Repeat, please.');
    } else {
        numberOfFilms = +numberOfFilms;
    }
} while (!correctInput);

if (numberOfFilms < 10) {
    alert("You've seen few films");
} else if (numberOfFilms < 30) {
    alert("You are an average customer");
} else {
    alert("Oh, you're an expirienced one");
}

for (let i = 1; i<=2; i++) {
    do {
        lastMovie = prompt('Call one of the last films you seen', '');
        correctInput = (lastMovie != null) && (lastMovie != '') && (lastMovie.length < 50);
        if (!correctInput) {
            alert('Incorrect input. Repeat, please.');
        }
    } while (!correctInput);
    do {
        lastScore = prompt('How do you rate it?', '');
        correctInput = !(isNaN(+lastScore)) && (lastScore != null) && (lastScore != '');
        if (!correctInput) {
            alert('Incorrect input. Repeat, please.');
        } else {
            lastScore = +lastScore;
        }
    } while (!correctInput);
    personalMovieDB.movies[lastMovie] = lastScore;
}

console.log(personalMovieDB);