import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
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
