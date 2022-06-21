import { Projet } from "./projet.model";

export class Tache {
    idTache !: number;
    nomTache !: string;
    desTache !: string;
    statut !: string; 
    dateDebut !: Date;
    dateEcheance !: Date;
    projet !: Projet;
    }
    