import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-integrations-page',
  templateUrl: './integrations-page.component.html',
  styleUrls: ['./integrations-page.component.css'],
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
export class IntegrationsPageComponent implements OnInit {
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  backToTop(){
    window.scroll(0,0)
  }

}
