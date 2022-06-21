import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css'],
encapsulation: ViewEncapsulation.None
})
export class PoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
