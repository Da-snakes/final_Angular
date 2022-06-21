import { User } from './../model/user.model';
import { AuthService } from './../service/auth.service';
import { Statut } from './../model/statut.model';
import { Pole } from './../model/pole.model';
import { Component, OnInit } from '@angular/core';

//
import { Router } from '@angular/router';

import { throwError } from 'rxjs';


import { ProjetService } from '../service/projet.service';

import { FormBuilder } from '@angular/forms';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css',
  '../../assets/css/mycss.css']
})
export class AddProjetComponent implements OnInit {

  chefs !: User[];
  poleOptions: Array<Pole> = [];
  statutOptions: Array<Statut> = [];

    //Data Binding From VIEW To MODULE
    newProjet = new Projet();


  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private projectService: ProjetService,
              private router: Router) { 
    /*this.projects = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];*/
  }

  ngOnInit(): void {

    this.poleOptions = this.projectService.getPoleOptions();
    this.statutOptions = this.projectService.getStatutOptions();


    //Users de nomRole="Chef"
    this.authService.getUserFromDBByRoleNom('Chef').subscribe(chef => {
      console.log(chef);
      this.chefs = chef;
    });
  }



  //Data Binding From VIEW To MODULE
  addProjet(){

    if (this.newProjet.chefProjet == undefined){
      this.newProjet.chefProjet = this.chefs[0].username;
    }
    this.projectService.ajouterProjet(this.newProjet).subscribe(liv => {

    });
    
    this.router.navigate(['projets']).then(() => {
      //window.location.reload();
    });
    //Ou bien
    // reload   .then(() => { window.location.reload(); })
    /*this.router.navigate(['livres']).then(() => {
      window.location.reload();
    });*/
  }


//////////////////////
  /*changeID(){
    this.projectService.consulterPortfolio(this.newIdPortfolio).subscribe( x =>{ this.newPortfolio = x; console.log("test3 gen: this.newGenre"); console.log(x); } ) ;

   }*/
//////////////////////

      //Data Binding From VIEW To MODULE
      /*newProject = new Project();
      message !: string;*/
/*
*/


}
