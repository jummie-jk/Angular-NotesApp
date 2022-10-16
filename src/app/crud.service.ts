import { tap } from 'rxjs/operators';
import { IData } from './pages/testing-page/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,  } from "@angular/core";
// import observable cuz backend returns assynchronous data
import { Observable } from 'rxjs';

@Injectable ({providedIn: 'root'})

export class CrudServices {
  // this below link is the link to the back end
  private baseUrl= 'api/data';

  constructor (private http: HttpClient){ //without "private" http would be localized in the constructor and unavailable to the class
    // this console logs the BackData instantly.
    http.get(this.baseUrl).subscribe(response => {console.log(response);});
}

private newItem(): IData {
  return {
    id: 0,
    serialNo: 0,
    parameter: 'null',
    type: 'null',
    description: 'null'
    //I used null in quotes for now, I'll have to find how Deborah did it as a value.
  };
}

// -READ (http.get)    get stuff
getData(): Observable<IData[]> {
  return this.http.get<IData[]>(this.baseUrl)
  .pipe(
    tap(response => console.log(JSON.stringify(response)) )
    )
  }
//get the specific data of the list by its id.  this.http.get<any>(`${}/${}`)  <- that's a 'template literal' which specifies the link to pass into the fn
getDataById(id: number): Observable<IData>{
  return this.http.get<any>(`${this.baseUrl}/${id}`)
  .pipe(tap(data => console.log('Specific item:' + data)
  ))
}
}
