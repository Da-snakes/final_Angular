import { Tache } from './../model/tache.model';
import { Projet } from './../model/projet.model';
import { Statut } from './../model/statut.model';
import { Pole } from './../model/pole.model';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../service/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css',
  '../../assets/css/mycss.css']
})
export class UpdateTacheComponent implements OnInit {

  statutOptions: Array<Statut> = [];

    //Data Binding From VIEW To MODULE
    newTache = new Tache();

  constructor(private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private projetService: ProjetService,
    private router: Router) { }

  ngOnInit(): void {
    this.statutOptions = this.projetService.getStatutOptions();

            //API REST
            this.projetService.consulterTache(this.activatedRoute.snapshot.params['id']).
            subscribe( liv =>{ this.newTache = liv; } ) ;
  }


  
  updateTache()
  { 
  this.projetService.updateTache(this.newTache).subscribe(liv => {
    this.router.navigate(['taches/'+this.newTache.projet.idProjet]);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }

}
