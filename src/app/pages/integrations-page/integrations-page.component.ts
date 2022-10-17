import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  showDiv = false;
  noteArea: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.noteArea = this.fb.group({
      note: '',
    })
  }

  goToreadRoute() {
    this.router.navigate([], { fragment: "readRoute" });
  }

  backToTop(){
    window.scroll(0,0)
  }

  showOrHide(): void {
    this.showDiv = !this.showDiv;
  }

}
