"use strict";

let numberOfFilms,
    lastMovie,
    lastScore,
    inputGenre,
    correctInput;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};    

function start() {
    personalMovieDB.private = confirm('Do you want your data base to be private?');
    do {
        numberOfFilms = prompt('How many films have you watched?', '');
        correctInput = !isNaN(numberOfFilms) && numberOfFilms != null && numberOfFilms != '';
        if (!correctInput) {
            alert('Incorrect input. Repeat, please.');
        }
    } while (!correctInput);
    personalMovieDB.count = +numberOfFilms;
    rateUser();
}

start();

function rateUser() {
    if (personalMovieDB.count < 10) {
        alert("You've seen few films");
    } else if (personalMovieDB.count < 30) {
        alert("You are an average customer");
    } else {
        alert("Oh, you're an expirienced one");
    }
}

function askRecentMovies() {
    for (let i = 0; i < 2; i++) {
        do {
            lastMovie = prompt('Call one of the last movies you seen', '');
            correctInput = lastMovie != null && lastMovie != '' && lastMovie.length < 50;
            if (!correctInput) {
                alert('Incorrect input. Repeat, please.');
            }
        } while (!correctInput);
        do {
            lastScore = prompt('How do you rate it?', '');
            correctInput = !isNaN(lastScore) && lastScore != null && lastScore != '';
            if (!correctInput) {
                alert('Incorrect input. Repeat, please.');
            }
        } while (!correctInput);
        personalMovieDB.movies[lastMovie] = +lastScore;
    }
}

askRecentMovies();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        do {
            inputGenre = prompt(`What is your favourite genre №${i+1}?`, '');
            correctInput = inputGenre != null && inputGenre != '' && inputGenre.length < 50;
            if (!correctInput) {
                alert('Incorrect input. Repeat, please.');
            }
        } while (!correctInput);

        personalMovieDB.genres[i] = inputGenre;
    }
}

writeYourGenres();

function showMyDB(isprivate) {
    if (!isprivate) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);