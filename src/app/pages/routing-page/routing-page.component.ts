import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudServices } from 'src/app/crud.service';
import { IData } from '../testing-page/data-interface';

@Component({
  selector: 'app-routing-page',
  templateUrl: './routing-page.component.html',
  styleUrls: ['./routing-page.component.css']
})
export class RoutingPageComponent implements OnInit {
  fullData: IData[] =[]
  itemId: number;
  @ViewChild('closeModalDelete') closeModalDelete: any;

  constructor(private service: CrudServices) {  }

  ngOnInit(): void {
    // Getting the List Data
    this.getItems();
    }

    getItems(){
      this.service.getData().subscribe(
        { next: res => { this.fullData = res;},}
        );
    }

  setId(id: number) {
    this.itemId = id;
  }
  deleteItem() {
    this.service.deleteItemById(this.itemId).subscribe(
       (response) => {
             this.closeModalDelete.nativeElement.click(); //closes modal
             this.getItems();
       },
    );
 }
}
