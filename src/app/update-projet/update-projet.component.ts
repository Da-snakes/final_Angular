import { User } from './../model/user.model';
import { AuthService } from './../service/auth.service';
import { Projet } from './../model/projet.model';
import { Statut } from './../model/statut.model';
import { Pole } from './../model/pole.model';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../service/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css',
  '../../assets/css/mycss.css']
})
export class UpdateProjetComponent implements OnInit {

  chefs !: User[];
  poleOptions: Array<Pole> = [];
  statutOptions: Array<Statut> = [];

  //Data Binding From VIEW To MODULE
  newProjet = new Projet();

  constructor(private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private projetService: ProjetService,
              private router: Router) { this.newProjet != new Projet();}

  ngOnInit(): void {
    this.poleOptions = this.projetService.getPoleOptions();
    this.statutOptions = this.projetService.getStatutOptions();





    //Users de nomRole="Chef"
    this.authService.getUserFromDBByRoleNom('Chef').subscribe(chef => {
      console.log(chef);
      this.chefs = chef;


              //API REST
              this.projetService.consulterProjet(this.activatedRoute.snapshot.params['id']).
              subscribe( liv =>{ this.newProjet = liv; } ) ;


    });
  }


  updateProjet()
  { 

    /*if (this.newProjet.chefProjet == undefined){
      this.newProjet.chefProjet = this.chefs[0].username;
    }*/

  this.projetService.updateProjet(this.newProjet).subscribe(liv => {
    this.router.navigate(['projets']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }

}
