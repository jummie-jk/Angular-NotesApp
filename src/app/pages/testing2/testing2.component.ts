import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {

  //testing using a class as an interface. define public companies as below and call in html.
  public companies: any[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];

  constructor() { }

  ngOnInit() {
  }

}
