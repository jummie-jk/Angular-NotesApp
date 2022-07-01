import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent implements OnInit {

  warrantForm: FormGroup;

  // Hardcoded: I want to take this out ant put in a separate file like a backend
  list: any[] =[
    {
      "number": 1 ,
      "parameter":'Issue date',
      "detail":'20/4/2011'
    },
    {
      "number": 2 ,
      "parameter":'Value date',
      "detail":'12/4/2011'
    },
    {
      "number": 3 ,
      "parameter":'Amount',
      "detail":'100'
    },
    {
      "number": 4 ,
      "parameter":"Index holder's name",
      "detail":'Onna'
    },
    {
      "number": 1 ,
      "parameter":'ngRepeatDummy',
      "detail":'ngRepeatDummy'
    },
    {
      "number": 1 ,
      "parameter":'ngRepeatDummy',
      "detail":'ngRepeatDummy'
    },
    {
      "number": 1 ,
      "parameter":'ngRepeatDummy',
      "detail":'ngRepeatDummy'
    },
    {
      "number": 1 ,
      "parameter":'ngRepeatDummy',
      "detail":'ngRepeatDummy'
    },
  ]

  // private fb: FormBuilder is needed in the constructor for form builder to work!
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.warrantForm = this.fb.group({
      Amount: ['',[Validators.required, Validators.maxLength(6)]],
      HolderName: ['',[Validators.required, ]],
      HolderId: ['',[Validators.required, ]],
      ReceivingAgent: ['',[Validators.required, ]],
      IssuingAgent: ['',[Validators.required, ]],
      BranchLocation: '',
      WarrantType: 'MarketWarrant',
    })
  }

  // log customer form value using this
  onSubmit(): void {
    console.log(this.warrantForm.value);
  }

  /** POST: add a new warrant to the database */
//   addWarrant(warrant: Warrant): Observable<Warrant> {
//   return this.http.post<Warrant>(this.list, warrant, httpOptions)
//     .pipe(
//       catchError(this.handleError('addWarrant', warrant))
//     );
// }

}
