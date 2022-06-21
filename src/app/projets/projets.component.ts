import { Pole } from './../model/pole.model';
import { Tache } from './../model/tache.model';
import { AuthService } from './../service/auth.service';

import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';

//service
import { ProjetService } from '../service/projet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css',
  '../../assets/css/mycss.css']
})
export class ProjetsComponent implements OnInit {

  poleOptions: Array<Pole> = [];

  projets !: Projet[];

  taches !: Tache[];

  newProjet = new Projet();

  constructor( /*private activatedRoute: ActivatedRoute,*/
              private projetService : ProjetService, private router: Router,public authService: AuthService) { 
    /*this.projects = [
      //{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
    ];

    this.projets = [ ];*/

  }

  ngOnInit(): void {

    this.poleOptions = this.projetService.getPoleOptions();

    //API rest subscribe Projet
    this.chargerProjets();

    /*console.log(this.activatedRoute.snapshot.params['pole'])*/

    

  }


  chargerProjetsParPole(pole : string){
    console.log(pole)
    this.projetService.listeProjetsParPole(pole).subscribe(livs => {
      console.log(livs);
      this.projets = livs;
    });
  }


  //API rest subscribe LIVRE
  chargerProjets(){
    /*if(this.activatedRoute.snapshot.params['pole'] == undefined)*/
    //API rest subscribe LIVRE
    this.projetService.listeProjets().subscribe(livs => {
      console.log(livs);
      this.projets = livs;
      });
    /*else
    this.projetService.listeProjetsParPole(this.activatedRoute.snapshot.params['pole']).subscribe(livs => {
      console.log(livs);
        //this.router.navigate(['/users']).then(() => {
        //  window.location.reload();
        //});
      this.projets = livs;
      });*/
  }


    //API REST
    supprimerProjet(pro: Projet) {
      

        
        //charger les taches
        this.projetService.listeTaches(pro.idProjet).subscribe(tacs => {
          console.log(tacs);
          this.taches = tacs;

          //Parcourir et supprimer les taches
          for (let tac of this.taches) {
            console.log(tac);
            this.projetService.supprimerTache(tac.idTache).subscribe(() => {
              console.log("Tache supprimé");
  
            });
          }


          //Supprimer le projet
          this.projetService.supprimerProjet(pro.idProjet).subscribe(() => {
            console.log("projet supprimé");
            this.SuprimerProjetDuTableau(pro);
          })
          

          });

      
    }


  
    SuprimerProjetDuTableau(pro: Projet) {
      this.projets.forEach((cur, index) => {
        if (pro.idProjet === cur.idProjet) {
          this.projets.splice(index, 1);
        }
      });
    }

}
