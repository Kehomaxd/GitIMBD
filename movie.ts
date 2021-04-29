import {Professional} from "./professional"

class Movie{

    //Atributos
    public title:string;
    public releaseYear:string;
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
    constructor(title:string,releaseYear:string,nacionality:string,genre:string){

        this.title=title;
        this.releaseYear=releaseYear;
        this.actors;
        this.nacionality=nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre=genre;
    }

    //Metodos
    public print():void{
        console.log(`Title: ${this.title}\nReleaseYear: ${this.releaseYear}\nActors: ${this.actors}\nNacionality: ${this.nacionality}\n
        Directo: ${this.director}\nWriter: ${this.writer}\nLanguage: ${this.language}\nPlataform: ${this.plataform}\nisMCU: ${this.isMCU}\n
        MainCharacterName: ${this.mainCharacterName}\nProducer: ${this.producer}\nDistributor: ${this.distributor}\nGenre: ${this.genre}`)
    }


}