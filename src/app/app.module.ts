import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TacheComponent } from './tache/tache.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PoleComponent } from './pole/pole.component';




@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    LoginComponent,
    LogoutComponent,
    UpdateUserComponent,
    AddUserComponent,
    UsersComponent,
    ForbiddenComponent,
    TacheComponent,
    AddTacheComponent,
    UpdateTacheComponent,
    SignupComponent,
    HomeComponent,
    PoleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    //Data Binding From VIEW To MODULE
    FormsModule,
    //Spring Boot API REST
    HttpClientModule,
    ////////////////////
    ReactiveFormsModule,
    
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),

    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
