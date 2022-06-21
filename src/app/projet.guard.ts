import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetGuard implements CanActivate {



  constructor (private authService: AuthService,
                private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin())
      return true;
    else {
      this.router.navigate(['login']);
      return false;
      }

    
    }
  
}


/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LivreGuard implements CanActivate {
  constructor (private authService: AuthService,
               private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}*/