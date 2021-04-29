//@kehomaxd


export class Professional{

    public name:string;
    public age:number;
    public genre:string;
    public weigth:number;
    public heigth:number;
    public hairColor:string;
    public eyeColor:string;
    public race:number;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNum:number;
    public profession:string;

    constructor(name:string, age:number, genre:string, weigth:number, heigth:number, hairColor:string, eyeColor:string, 
        race:number, isRetired:boolean, nationality:string, oscarsNum:number, profession:string){

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

    print(){
        console.log(` Name: ${this.name}\n Age: ${this.age}\n Genre: ${this.genre}\n Weigth: ${this.weigth}\n Heigth: ${this.heigth}\n Hair Color: ${this.hairColor}\n Eye Color: ${this.eyeColor}\n Race: ${this.race}\n Retired: ${this.isRetired}\n Nationality: ${this.nationality}\n Oscars wins: ${this.oscarsNum}\n Profession: ${this.profession}`);
    }

}