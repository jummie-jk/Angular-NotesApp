import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-detail-page',
  templateUrl: './view-detail-page.component.html',
  styleUrls: ['./view-detail-page.component.css']
})
export class ViewDetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteFn3() {
    alert('uhn was deleted')
  }

  saveFn3(){
    alert('SAVED')
  }
}
