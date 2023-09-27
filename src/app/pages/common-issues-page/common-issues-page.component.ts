import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-issues-page',
  templateUrl: './common-issues-page.component.html',
  styleUrls: ['./common-issues-page.component.css']
})
export class CommonIssuesPageComponent implements OnInit {
  toSet: string[] = [];
  collapsed = false;
  active1: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;

  constructor() {
    this.findActiveProperties(this); //"this" in the bracket refers to "this component class"
   }

  ngOnInit(): void {
  }

  backToTop(){
    window.scroll(0,0)
  }
  toggleCollapse(){
    this.toggleBooleanValue(this);
  }
  findActiveProperties(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'boolean' && key.toLowerCase().includes('active')) {
        this.toSet.push(key);
      }
    }
  }

  toggleBooleanValue(obj: any) {
    this.collapsed = !this.collapsed;
    for (const key of this.toSet) {
      obj[key] = !obj[key];
    }
  }


  toggleAccordion1(): void {
    this.active1 = !this.active1;
  }
  toggleAccordion2(): void {
    this.active2 = !this.active2;
  }
  toggleAccordion3(): void {
    this.active3 = !this.active3;
  }
  toggleAccordion4(): void {
    this.active4 = !this.active4;
  }


}
