import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'GestionProjet';





  //Username
  constructor(public authService: AuthService,
              private router : Router){}
   ngOnInit () {
   /*let isloggedin : string | null;
   let loggedUser : string | null;
   let AdminOrUser : string | null;
   isloggedin = localStorage.getItem('isloggedIn');
   loggedUser = localStorage.getItem('loggedUser');
   AdminOrUser = localStorage.getItem('AdminOrUser');
   if (isloggedin!="true" || !loggedUser || !AdminOrUser )
   this.router.navigate(['/login']);
   else
   this.authService.setLoggedUserFromLocalStorage(loggedUser , AdminOrUser);
 
 
 
 
 
 
     this.authService.loadToken();*/
     //if (this.authService.getToken() == null /*|| this.authService.isTokenExpired()*/) {
       /*this.router.navigate(['/login']);
       this.authService.logout();
     }*/









    let isloggedin : string | null;
    let loggedUser : string | null;
    let AdminOrUser : string | null;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    AdminOrUser = localStorage.getItem('AdminOrUser');
    if (isloggedin!="true" || !loggedUser || !AdminOrUser )
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser , AdminOrUser);
   }










}
