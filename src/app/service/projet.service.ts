import { Tache } from './../model/tache.model';
import { Injectable } from '@angular/core';

import { Projet } from '../model/projet.model';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Pole } from '../model/pole.model';
import { Statut } from '../model/statut.model';


//Path
import { apiURLGlobale } from './../config';


//API REST
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };



@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  //Path
  apiURL1 : string = 'http://localhost:';
 
  //Path projet et tache
  //URLProjet : string =  "http://localhost:8888/projets/apip";
  URLProjet : string =  apiURLGlobale+"apip";
  //URLProjetParPole : string = "http://localhost:8888/projets/apip/pole";
  URLProjetParPole : string =  apiURLGlobale+"apip/pole";
  //URLTache : string =  "http://localhost:8888/projets/apit";
  URLTache : string =  apiURLGlobale+"apit";
  //URLTacheParProjet : string =  "http://localhost:8888/projets/apit/projet";
  URLTacheParProjet : string =  apiURLGlobale+"apit/projet";

  Projets !: Projet[];


  constructor( /*API REST*/private http : HttpClient  ) { }
//////////////////////////////////////////////////////////////////////////////////////////////
  //API REST
  listeProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.URLProjet);
  }

  listeProjetsParPole(pole: string): Observable<Projet[]> {
    const url = `${this.URLProjetParPole}/${pole}`;
    return this.http.get<Projet[]>(url);
  }

  //API REST
  ajouterProjet(proj: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.URLProjet, proj, httpOptions);
  }


  //API REST
  supprimerProjet(id: number) {
    const url = `${this.URLProjet}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  //API REST
  consulterProjet(id: number): Observable<Projet> {
    const url = `${this.URLProjet}/${id}`;
    return this.http.get<Projet>(url);
  }


  //API REST
  updateProjet(proj: Projet): Observable<Projet> {
    return this.http.put<Projet>(this.URLProjet, proj, httpOptions);
  }

//////////////////////////////////////////////////////////////////////////////////////////////
  getPoleOptions(): Array<Pole> {
    return [{ idPole: 1, nomPole: 'PIAT', descPole: 'Le Pole Infrastructures et Aménagement du Territoire' }, 
     
    { idPole: 2, nomPole: 'PSOL', descPole: 'Le Pole Solidatités' },
    { idPole: 3, nomPole: 'PRESS', descPole: 'Le Pole Resssources' },
    { idPole: 4, nomPole: 'PECS', descPole: 'Le Pole Education, Culture et Sports' }];
  }
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
getStatutOptions(): Array<Statut> {
  return [{ statut: 'À attribuer'}, 
  { statut: 'À lancer'}, 
  { statut: 'En cours' },
  { statut: 'Suspendu' },
  { statut: 'Terminé' }
];
}


  ///////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////
  //API REST
  listeTaches(id: number): Observable<Tache[]> {
    const url = `${this.URLTacheParProjet}/${id}`;
    return this.http.get<Tache[]>(url);
  }

  //API REST
  ajouterTache(tac: Tache): Observable<Tache> {
    return this.http.post<Tache>(this.URLTache, tac, httpOptions);
  }


  //API REST
  supprimerTache(id: number) {
    const url = `${this.URLTache}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  //API REST
  consulterTache(id: number): Observable<Tache> {
    const url = `${this.URLTache}/${id}`;
    return this.http.get<Tache>(url);
  }


  //API REST
  updateTache(tac: Tache): Observable<Tache> {
    return this.http.put<Tache>(this.URLTache, tac, httpOptions);
  }

//////////////////////////////////////////////////////////////////////////////////////////////



}

