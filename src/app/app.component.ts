import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Bootstrap testing code below!
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
export class AppComponent {
  title = 'NB';
  // Bootstrap testing code!
  disabled = false;
}
