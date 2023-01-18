import { Component, OnInit } from '@angular/core';
import { IData } from '../testing-page/data-interface';

@Component({
  selector: 'app-filters-page',
  templateUrl: './filters-page.component.html',
  styleUrls: ['./filters-page.component.css']
})
export class FiltersPageComponent implements OnInit {

  filteredData: IData[] = [];
  filteredItems: IData[] = [];

  fullData: IData[] =[
    {
      "id": 1 ,
      "serialNo": 1233,
      "parameter":'Tesla',
      "type":'company',
      "description": "Elon Musk's company, which has made him so rich he trolls the world"
    },
    {
      "id": 2 ,
      "serialNo": 0,
      "parameter":'doge',
      "type":'animal',
      "description": 'a troll dog meme that became popular'
    },
    {
      "id": 3 ,
      "serialNo": 1030,
      "parameter":'Messi',
      "type":'man',
      "description": 'only guy I know with his name and he is the GOAT'
    },
    {
      "id": 4 ,
      "serialNo": 4321,
      "parameter":'Avatar',
      "type":'movie',
      "description": 'blockbuster movie and possible pioneer of 3D in cinemas'
    },
    {
      "id": 5 ,
      "serialNo": 1277,
      "parameter":'crab',
      "type":'animal',
      "description": 'a gunner'
    },
    {
      "id": 6 ,
      "serialNo": 1234,
      "parameter":'Avatar',
      "type":'cartoon',
      "description": 'possibly THE greatest american cartoon ever'
    },
    {
      "id": 7 ,
      "serialNo": 2697,
      "parameter":'Apple',
      "type":'company',
      "description": 'this is the company founded by Steve Jobs'
    },
    {
      "id": 8 ,
      "serialNo": 7,
      "parameter":'Ronaldo',
      "type":'man',
      "description": 'lost GOAT status to Messi same year his son died. Harsh.'
    },
  ]

  //original listFilter value
  // listFilter: string;

  //recreating listFilter as a getter and setter
  private _searchValue: string = '';
  get searchValue(): string {
    return this._searchValue
  }
  set searchValue(inputText: string) {
    console.log(inputText);
    // this.searchValue = value;
    this.filteredItems = this.filterFn2(inputText);
  }

  constructor() { }

  ngOnInit(): void {
    this.filteredItems = this.fullData;
    this.filteredData = this.fullData;
    // this.searchValue = 'tesla';

    // console.log(this.searchValue);

  }

  filterfn(type: string){
    if (type == 'All') {
      this.filteredData = this.fullData
    }
    else {
      this.filteredData  = this.fullData.filter(passIf => passIf.type == type);
    }
  }

  filterFn2(searchWord: string): IData[] {
    searchWord = searchWord.toLowerCase();     //convert to lowercase for accuracy
    return this.filteredItems = this.fullData.filter(
    (item:IData) => item.parameter.toLowerCase().includes(searchWord)      //so both things being compared match as lowercase
      );
    }
}
