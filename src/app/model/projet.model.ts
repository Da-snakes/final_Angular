import { Tache } from './tache.model';

export class Projet {
    idProjet !: number;
    nomProjet !: string;
    chefProjet !: string;
    descProjet !: string;
    budgetProjet !: number;
    statut !: string;
    dateDebut !: Date;
    dateEcheance !: Date;
    pole !: string;
    taches !: Tache[];
    }