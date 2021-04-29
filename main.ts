import {Imbd} from "./imbd";
import {Professional} from "./professional";
import {Movie} from "./movie";
import * as user from "readline-sync";
import * as fs from "file-system";

let subjet1 = new Professional("Jhonny", 57, "Male", 78, 178, "Brown", "Brown", 37, false, "American", 0, "Actor, Producer, Screenwriter and Musician");
let subjet2 = new Professional("Tim", 62, "Male", 85, 182, "Brown", "Brown", 50, false, "American", 0, "Director, Producer, Writer and Cartoonist");
// let subjet3 = new Professional("Winona", 49, "Female", 52, 161, "Brown", "Brown", 36, false, "American", 0, "Actress");
​
​
​
let subjet4 = new Professional("Christopher", 41, "Male", 90, 191, "Brown", "green", 21, false, "American", 0, "Actor, Voice actor and Producer"); 
let subjet5 = new Professional("Bradley", 46, "Male", 100, 185, "Brown", "BLue", 22, false, "American", 0, "Actor, Voice actor, Director, Producer, Screenwriter, SingerComposer"); 
let subjet6 = new Professional("Karen", 33, "Female", 58, 128, "Red", "Brown", 13, false, "British", 0, "Actress and Model");
​
let subjet7 = new Professional("James", 54, "Male", 72, 175, "Brown", "Bronw", 26, false, "Americano", 0, "Director, Writer");
​
//Pelicula1
let movie1:Movie= new Movie("Edward Scissorhands ",1990,"United State","Drama");
movie1.actors=[subjet1,subjet2]
movie1.director=subjet2;
movie1.writer=subjet1;
movie1.language="Ingles y español";
movie1.plataform="Disney+";
movie1.isMCU=false;
movie1.mainCharacterName="Edward";
movie1.producer="20th Century Studios";
movie1.distributor="20th Century Fox";

//Pelicula2
let movie2:Movie= new Movie("Guardian of Galaxy ",2014,"United State","Heroes");
movie2.actors=[subjet4,subjet5,subjet6]
movie2.director=subjet7;
movie2.writer=subjet7;
movie2.language="Italiano y español";
movie2.plataform="Disney+";
movie2.isMCU=true;
movie2.mainCharacterName="Peter";
movie2.producer="Marvell";
movie2.distributor="Marvell Studios";

//IMBD ​
let movies:Movie[] = [movie1, movie2]
let cine:Imbd = new Imbd(movies);

//Escribo en fichero JSON
cine.escribirFicheroJSON("imdbBBDD.json");

//Introduzco por pantalla
let titulo = user.question("Introducir el titulo de la pelicula: ")
let year = user.question("Introducir estreno: ");
let nationality = user.question("Pais de origen: ");
let language = user.question("Introducir idioma: ");
let plataform = user.question("Introducir plataforma: ");
let UMC = user.question("Introducir es del MCU(true o false): ");
let mainCharacterName = user.question("Introducir personaje: ");
let producer= user.question("Introducir productor: ");
let distributor = user.question("Introducir distribuidor: ");
let genero = user.question("Introducir genero: ");

//Creo y relleno nueva pelicula.
let peli = new Movie (titulo, year, nationality, genero);
peli.actors=[subjet1,subjet2];
peli.director=subjet2;
peli.writer=subjet2;
peli.language=language;
peli.plataform=plataform;
peli.isMCU=UMC;
peli.mainCharacterName=mainCharacterName;
peli.producer=producer;
peli.distributor=distributor;

//Leo en fichero JSON
let cine2=cine.obtenerInstanciaIMDB("imdbBBDD.json")

//Agrego la nueva pelicula a IMBD
cine2.push(peli);

let jsonImdb= JSON.stringify(peli);
fs.writeFileSync("./imdbBBDD.json",jsonImdb,{encoding:"utf8", mode:0o666, flag:"w+"});
console.log(cine2)




