import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';


import { Statut } from './../model/statut.model';
import { Pole } from './../model/pole.model';

import { Router, ActivatedRoute } from '@angular/router';



import { ProjetService } from '../service/projet.service';

import { FormBuilder } from '@angular/forms';
import { Projet } from '../model/projet.model';
import { Tache } from '../model/tache.model';


@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css',
  '../../assets/css/mycss.css']
})
export class AddTacheComponent implements OnInit {

  statutOptions: Array<Statut> = [];

  //newTache !: Tache;
  newTache = new Tache();

  projet !: Projet;

  

  constructor( private activatedRoute: ActivatedRoute, private projetService : ProjetService, private router: Router,public authService: AuthService ) { }

  ngOnInit(): void {

    this.statutOptions = this.projetService.getStatutOptions();

    this.projetService.consulterProjet(this.activatedRoute.snapshot.params['id']).
    subscribe( liv =>{ this.projet = liv;  this.newTache.projet=liv;} ) ;
  }






  //Data Binding From VIEW To MODULE
  addTache(){
    this.projetService.ajouterTache(this.newTache).subscribe(liv => {

      //Reload after adding Task
      this.router.navigate(['taches/'+this.activatedRoute.snapshot.params['id']]).then(() => {
        //window.location.reload();
      });

    });
    

    //Ou bien
    // reload   .then(() => { window.location.reload(); })
    /*this.router.navigate(['livres']).then(() => {
      window.location.reload();
    });*/
  
  }


}
