import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

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

   //making the property a getter
  get eachStep(): FormArray{
    return <FormArray>this.MasterDiv.get('eachStep')
  }

  constructor(private fb: FormBuilder,) { }



  ngOnInit() {
      // this.MasterDiv = this.fb.group({
      //   step: '',
      //   status: '',
      //   description: '',
      // })


      //----------SECOND ATTEMPT
      this.MasterDiv = this.fb.group({
        eachStep: this.fb.array([ this.generateEntryInstance() ])
      });
  }

  logClick(){
    console.log(this.MasterDiv.value);
  }
  generateEntryInstance(): FormGroup {
    return this.fb.group({
      step: '',
      status: '',
      description: '',
    })
  }
  duplicateFn() {
    this.eachStep.push(this.generateEntryInstance());
    }
}
