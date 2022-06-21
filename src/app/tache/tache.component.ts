import { Tache } from './../model/tache.model';
import { AuthService } from './../service/auth.service';

import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';

//service
import { ProjetService } from '../service/projet.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css',
  '../../assets/css/mycss.css']
})
export class TacheComponent implements OnInit {

  taches !: Tache[];

  projet !: Projet;

  newTache = new Tache();

  constructor( private activatedRoute: ActivatedRoute, private projetService : ProjetService, private router: Router,public authService: AuthService ) { }

  ngOnInit(): void {
     //API rest subscribe Tache
     this.chargerTaches();

      this.projetService.consulterProjet(this.activatedRoute.snapshot.params['id']).
      subscribe( liv =>{ this.projet = liv; } ) ;
  }

  

    //API rest subscribe LIVRE
    chargerTaches(){
      //API rest subscribe LIVRE
      this.projetService.listeTaches(this.activatedRoute.snapshot.params['id']).subscribe(tacs => {
        console.log(tacs);
        this.taches = tacs;
        });
    }


      //API REST
      supprimerTache(pro: Tache) {

        
          this.projetService.supprimerTache(pro.idTache).subscribe(() => {
            console.log("Tache supprimé");
            this.SuprimerTacheDuTableau(pro);
          });
          /*this.router.navigate(['livres']).then(() => {
          window.location.reload();
          });*/
      }
    
      SuprimerTacheDuTableau(pro: Tache) {
        this.taches.forEach((cur, index) => {
          if (pro.idTache === cur.idTache) {
            this.taches.splice(index, 1);
          }
        });
      }

}
