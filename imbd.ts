//@kehomaxd

import {Professional} from "./professional";
import {Movie} from "./movie";
import * as fs from "file-system";
 

export class Imbd{

    public movies:Movie[]

    constructor(catalogue:Movie[]){

        this.movies = catalogue; 

    }

    escribirFicheroJSON(nombreFichero:string){
        let ficheroDatos= JSON.stringify(this.movies);
        fs.writeFileSync(nombreFichero,ficheroDatos,{encoding:"utf8", mode:0o666, flag:"w+"});

    }


    obtenerInstanciaIMDB(nombreFichero:string){
        let lectura = fs.readFileSync(nombreFichero,{encoding:"utf8",flag:"rs+"});
        return JSON.parse(lectura);
    }


}