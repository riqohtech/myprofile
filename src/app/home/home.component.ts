import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { trigger, state, style, stagger, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('productsAnimation', [
      transition('* => *', [
        query('.product', style({transform: 'translateX(-100%)'})),
        query('.product', stagger('600ms', [
          animate('900ms ease-in', style('*'))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  isMenuOpen = false;

  constructor(public iconRegistry: MatIconRegistry,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
