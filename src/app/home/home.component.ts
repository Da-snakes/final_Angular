import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../assets/css/mycss.css'],
  /*encapsulation: ViewEncapsulation.None*/
})
export class HomeComponent implements OnInit {

  myscriptElement1 !: HTMLScriptElement;

  constructor() { }

  ngOnInit(): void {

        //1
        this.myscriptElement1 = document.createElement("script");
        this.myscriptElement1.text = ' var mybutton = document.getElementById("myBtn");  window.onscroll = function () { scrollFunction() }; function scrollFunction() { if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { mybutton.style.display = "block"; } else { mybutton.style.display = "none"; } } function topFunction() { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }';
        document.body.appendChild(this.myscriptElement1);
  }

}
