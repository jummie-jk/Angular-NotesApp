import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-duplication-page',
  templateUrl: './form-duplication-page.component.html',
  styleUrls: ['./form-duplication-page.component.css']
})
export class FormDuplicationPageComponent implements OnInit {
  //DEFINITIONS
  MasterDiv: FormGroup;
  entryDiv: FormGroup;
//!DEFINITIONS


  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
      this.MasterDiv = this.fb.group({
        step: '',
        status: '',
        description: '',
      })
  }

  logClick(){
    console.log(this.MasterDiv.value);
  }
  duplicateFn(): FormGroup {
    return this.fb.group({
      step: '',
      status: '',
      description: '',
    })
  }
}
