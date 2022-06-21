


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Projets
import { ProjetsComponent } from './projets/projets.component';

//Projets
import { AddProjetComponent } from './add-projet/add-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';


//Taches
import { TacheComponent } from './tache/tache.component';

//Taches
import { AddTacheComponent } from './add-tache/add-tache.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';

//User
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

//Log
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

//Forbidden
import { ForbiddenComponent } from './forbidden/forbidden.component';

//Guard
import { ProjetGuard } from './projet.guard';
import { AdminGuard } from './admin.guard';
import { ChefGuard } from './chef.guard';

//Home
import { HomeComponent } from './home/home.component';
import { PoleComponent } from './pole/pole.component';


const routes: Routes = [

  //Home
  {path: 'home', component: HomeComponent},
  {path: 'pole', component: PoleComponent},

  //Log
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent,  canActivate:[ProjetGuard]},

  //API REST User
  {path: "users", component : UsersComponent, canActivate:[AdminGuard]},
  {path: "add-user", component : AddUserComponent, canActivate:[AdminGuard]},
  {path: "update-user/:id", component : UpdateUserComponent, canActivate:[AdminGuard]},

  //Forbidden non Admin
  {path: 'app-forbidden', component: ForbiddenComponent},

  //Projets
  {path: "projets", component : ProjetsComponent,  canActivate:[ProjetGuard]},
  {path: "ajouterProjet", component : AddProjetComponent,  canActivate:[ChefGuard]},
  {path: "modifierProjet/:id", component : UpdateProjetComponent,  canActivate:[ChefGuard]},

  //Tache
  {path: "taches/:id", component : TacheComponent,  canActivate:[ProjetGuard]},
  {path: "ajouterTache/:id", component : AddTacheComponent,  canActivate:[ChefGuard]},
  {path: "modifierTache/:id", component : UpdateTacheComponent,  canActivate:[ChefGuard]},
  

  //Path
  { path: "", redirectTo: "projets", pathMatch: "full" },
  //Othterwise redirect to projets
  //{ path: "*", redirectTo: "projets"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
