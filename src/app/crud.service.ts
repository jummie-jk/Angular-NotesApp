import { tap } from 'rxjs/operators';
import { Data } from './pages/testing-page/data-interface';
import { HttpClient } from '@angular/common/http';
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


// -READ (http.get)    get stuff
getData(): Observable<Data[]> {
  return this.http.get<Data[]>(this.baseUrl)
  .pipe(
    tap(response => console.log(JSON.stringify(response)) )
    )
  }

  //  -CREATE (http.post)    post stuff
  // postData(): Data {
  //   return this.http.post<Data[]>(this.baseUrl, data) {}
  // }

  // -UPDATE (http.put)   update/put stuff

  // -DELETE (http.delete)   delete stuff

}
