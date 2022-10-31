import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
//DEFINITIONS
  MainDiv: FormGroup;

//!DEFINITIONS


  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.MainDiv = this.duplicateFn()
  }

  logClick(){
    console.log(this.MainDiv.value);
  }
  duplicateFn(): FormGroup {
    return this.formBuilder.group({
      step: '',
      status: '',
      description: '',
    })
  }
}
