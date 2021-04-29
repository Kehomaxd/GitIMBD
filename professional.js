"use strict";
//@kehomaxd
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weigth, heigth, hairColor, eyeColor, race, isRetired, nationality, oscarsNum, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weigth = weigth;
        this.heigth = heigth;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNum = oscarsNum;
        this.profession = profession;
    }
    Professional.prototype.print = function () {
        console.log(" Name: " + this.name + "\n Age: " + this.age + "\n Genre: " + this.genre + "\n Weigth: " + this.weigth + "\n Heigth: " + this.heigth + "\n Hair Color: " + this.hairColor + "\n Eye Color: " + this.eyeColor + "\n Race: " + this.race + "\n Retired: " + this.isRetired + "\n Nationality: " + this.nationality + "\n Oscars wins: " + this.oscarsNum + "\n Profession: " + this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
