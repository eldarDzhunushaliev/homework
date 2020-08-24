"use strict";

let numberOfFilms,
    lastMovie,
    lastScore,
    inputGenres,
    correctInput;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    public: false,

    changePrivacyPolicy: function() {
        this.public = confirm('Do you want your database to be public?');
    },

    countFilms: function() {
        do {
            numberOfFilms = prompt('How many films have you watched?', '');
            correctInput = !isNaN(numberOfFilms) && numberOfFilms != null && numberOfFilms != '';
            if (!correctInput) {
                alert(numberOfFilms);
                console.log(numberOfFilms);
            }
        } while (!correctInput);
        this.count = +numberOfFilms;
    },

    rateUser: function() {
        if (this.count < 10) {
            alert("You've seen few films");
        } else if (this.count < 30) {
            alert("You are an average customer");
        } else {
            alert("Oh, you're an expirienced one");
        }
    },

    //inheretation doesn't work properly with 2-leveled objects
    askRecentMovies: function() {
        // this.movies = this.movies;

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

            this.movies[lastMovie] = +lastScore;
        }
    },

    //inheretation doesn't work properly with 2-leveled objects
    writeYourGenres: function() {
        // this.genres = this.genres;

        do {
            inputGenres = prompt(`Enter your favourite genres comma separated`, '');
            correctInput = inputGenres != null && inputGenres != '';
            if (!correctInput) {
                alert('Incorrect input. Repeat, please.');
            }
        } while (!correctInput);
        
        this.genres = inputGenres.split(', ');
        personalMovieDB.genres.sort();
        
        this.genres.forEach((item, i, arr) => {
            console.log(`Your favourite genre №${i + 1} is ${item}!`);
        });
    },

    showDB: function(ispublic) {
        if (ispublic) {
            console.log(this);
        }
    }
};

// personalMovieDB.countFilms();
// personalMovieDB.rateUser();
// personalMovieDB.askRecentMovies();
// personalMovieDB.writeYourGenres();
// personalMovieDB.changePrivacyPolicy();
// personalMovieDB.showDB(personalMovieDB.public);

// const elDB = Object.create(personalMovieDB);
// elDB.countFilms();
// elDB.rateUser();
// elDB.askRecentMovies();
// elDB.writeYourGenres();
// elDB.changePrivacyPolicy();
// elDB.showDB(elDB.public);