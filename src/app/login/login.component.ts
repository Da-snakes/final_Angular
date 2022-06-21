import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

//ERROR TEST
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//ERROR TEST

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../assets/css/mycss.css'/*,

  '../../assets/Poles/wp-content/themes/amos/css/animate.minc8d8.css',
  '../../assets/Poles/wp-content/themes/amos/stylec8d8.css',
  '../../assets/Poles/wp-content/themes/amos/css/animsition.minc8d8.css',
  
'../../assets/Poles/wp-content/themes/amos/css/jquery.multiscrollc8d8.css'*/]
})
export class LoginComponent implements OnInit {


  //ERROR TEST
  loginForm !: FormGroup;
  loading = false;
  submitted = false;
  //ERROR TEST


  /*
    iduser !: number;
    username !: string ;
    email !: string ;
    password !: string;
    enabled !: boolean;
    role !: Role;
  */
  user = new User();
  erreur=0;

  constructor(private authService : AuthService,
              private router: Router,
              //ERROR TEST
              ///////////////////////////////////
              private formBuilder : FormBuilder,
              private route : ActivatedRoute
              //ERROR TEST
              ) {
                //ERROR TEST
                //////////////////////Prevent logged user from login in page reload
                if (this.authService.isAdmin()) {this.router.navigate(['/ColorGame']);}
                //ERROR TEST
                }

  ngOnInit(): void {
                //ERROR TEST
                this.loginForm = this.formBuilder.group({
                  email : ['', [Validators.required, Validators.minLength(6), Validators.email]],
                  password : ['', [Validators.required, Validators.minLength(5)]]
                });
                /*this.loginForm.setValue({ 
                  email : '',
                  password: ''
                });*/
                //ERROR TEST
  }


  //ERROR TEST
  get f() {return this.loginForm.controls;}
  get mail() {return this.loginForm.get('email');}
  get pass() {return this.loginForm.get('password');}
  //ERROR TEST



  onSubmit() {
    this.loading = true;
    this.submitted = true;

    console.log(this.loginForm.get('password')?.hasError('required'));
    console.log(this.loginForm.get('password'));
    //Stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }


    this.onLoggedin();
    this.loading = false;

  }
  //ERROR TEST










  onLoggedin() {

    this.authService.getUserFromDB(this.user.email).subscribe((usr: User) => {

if (usr == null){console.log("faux");  this.erreur = 1;}
else{
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.erreur = 0;
        this.loading = true;
        //this.router.navigate(['/']);
        setTimeout(() => {this.router.navigate(['/projets'],)}, 1270);
      }
      else
        this.erreur = 1;
      console.log(usr);
}
    }, (err) =>{ console.log(err);  this.erreur = 1;}  );
  }




  //livre

  /*onLoggedin() 
  {
    this.authService.getUserFromDB(this.user.username).subscribe((usr: User) => {
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.erreur = 0;
        this.router.navigate(['/']);
      }
      else
        this.erreur = 1;
    }, (err) => console.log(err));*/

    /*
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;*/
  /////////}








  //Color

    //user test
  /*onLoggedin(){
    console.log(this.loginForm.getRawValue());
    console.log(this.user);
    console.log(this.loginForm.get('password'));
    console.log(this.loginForm.controls);
    //console.log(this.loginForm.controls.password.value);
    
    //ERROR TEST
    //this.user.email = this.f.email.value;
    //this.user.password = this.f.password.value;
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    
    
    //if (this.authService.VideEmail(this.user)) this.longeurEmail = 0;
    if (isValidUser){
      this.erreur = 0;
      this.loading =false;
      /////////////////////////////After success login go to ColorGame
      this.router.navigate(['/']);
    }
      
    else
    this.erreur = 1;
      //alert('Login ou mot de passe incorrecte!');
    
  }*/

}