import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges { //use on changes so that each star canchange its display when the rating changes.
rating: number = 3.5;
cropWidth: number = 75;

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
    /*to get the crop width for each star, the total width is 75px so each star takes up 75/5 px.
    Meaning the crop width of stars to show is whatever the Rating * TotalWidth/NumberOfStars. That'll give you the width in px of that particular item's stars */
  }

  onClick() {
    throw new Error('Method not implemented.');
    }
}
