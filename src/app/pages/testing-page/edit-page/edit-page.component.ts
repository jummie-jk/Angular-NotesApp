import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudServices } from 'src/app/crud.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  //Definitions
  listDataForm: FormGroup;
  //!End Definitions

  constructor(private fb: FormBuilder,
              private service: CrudServices,) { }

  ngOnInit(): void {
    this.listDataForm = this.fb.group({
      number: [''],
      parameter: [''],
      type: [''],
      description: [''],
    })
  }

  deleteFn() {
    alert('uhn was deleted')
  }

  saveFn(){
    alert('SAVED')
  }
}
