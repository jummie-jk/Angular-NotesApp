import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudServices } from 'src/app/crud.service';
import { IData } from '../data-interface';

@Component({
  selector: 'app-view-detail-page',
  templateUrl: './view-detail-page.component.html',
  styleUrls: ['./view-detail-page.component.css']
})
export class ViewDetailPageComponent implements OnInit {
//DEFINITIONS
  item: IData;
  private sub: Subscription;

//!END DEFINITIONS
  constructor(private service: CrudServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //reading the id of an item from the id in the path at the top bar of the page
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id')!;  //this pulls the id from the parameters array and puts into the const which is then put into the getItemForViewingById method.
        this.getItemForViewingById(id);
      }
    )
  }

  getItemForViewingById(id: number): void {
    this.service.getDataById(id)
    .subscribe({
      // next: (res: IData) => console.log(res),
      next: res => this.item = res,
    });
  }

  deleteFn3() {
    alert('uhn was deleted')
  }

  saveFn3(){
    alert('SAVED')
  }
}
