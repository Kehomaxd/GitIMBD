import {Professional} from "./professional"

export class Movie{

    //Atributos
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    //Constructor
    constructor(title:string,releaseYear:number,nacionality:string,genre:string){

        this.title=title;
        this.releaseYear=releaseYear;
        this.nacionality=nacionality;
        this.genre=genre;
    }

    //Metodos
    public print():void{
        console.log(`Title: ${this.title}\nReleaseYear: ${this.releaseYear}\nActors:`);
        for(let i=0;i<this.actors.length;i++){
        this.actors[i].print();
        console.log(" ")
        }
        console.log(`Nacionality: ${this.nacionality}\nDirector:`);
        this.director.print();
        console.log(`Writer: `)
        this.writer.print();
        console.log(`Language: ${this.language}\nPlataform: ${this.plataform}\nisMCU: ${this.isMCU}\nMainCharacterName: ${this.mainCharacterName}\nProducer: ${this.producer}\nDistributor: ${this.distributor}\nGenre: ${this.genre}\n`)
    }


}