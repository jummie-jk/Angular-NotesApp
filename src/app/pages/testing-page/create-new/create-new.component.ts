import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServices } from 'src/app/crud.service';
import { IData } from '../data-interface';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  //Definitions
  listDataForm: FormGroup;
  item: IData;
  //!End Definitions

  constructor(private fb: FormBuilder, private router: Router,
              private service: CrudServices,) { }

  ngOnInit(): void {
    //form model
    this.listDataForm = this.fb.group({
      serialNo: '',
      parameter: '',
      type: '',
      description: '',
    })
  }

  deleteFn() {
    alert('uhn was deleted')
  }

  saveFn(){
    const I = {...this.item, ...this.listDataForm.value} //copies listDataForm's value over item and puts the result inside I
    this.service.createItem(I)
      .subscribe({
        next: () => this.onSaveComplete()
      })  }
  onSaveComplete(): void {
    // this.listDataForm.reset();
    this.router.navigate(["/pages/testing"]);
  }
}
