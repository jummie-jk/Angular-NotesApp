import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
    .custom-header::after {
      content: none;
    }
  `]
})
export class PagesComponent implements OnInit {
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
