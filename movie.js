"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    //Constructor
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }
    //Metodos
    Movie.prototype.print = function () {
        console.log("Title: " + this.title + "\nReleaseYear: " + this.releaseYear + "\nActors:");
        for (var i = 0; i < this.actors.length; i++) {
            this.actors[i].print();
            console.log(" ");
        }
        console.log("Nacionality: " + this.nacionality + "\nDirector:");
        this.director.print();
        console.log("Writer: ");
        this.writer.print();
        console.log("Language: " + this.language + "\nPlataform: " + this.plataform + "\nisMCU: " + this.isMCU + "\nMainCharacterName: " + this.mainCharacterName + "\nProducer: " + this.producer + "\nDistributor: " + this.distributor + "\nGenre: " + this.genre + "\n");
    };
    return Movie;
}());
exports.Movie = Movie;
