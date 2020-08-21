"use strict";

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt('Call one of the last films you seen', ''),
    lastScore = prompt('How do you rate it?', '');

personalMovieDB.movies[lastMovie] = lastScore;

lastMovie = prompt('Call one of the last films you seen', '');
lastScore = prompt('How do you rate it?', '');

personalMovieDB.movies[lastMovie] = lastScore;

console.log(personalMovieDB);

//test comment