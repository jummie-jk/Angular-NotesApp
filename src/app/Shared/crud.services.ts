import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,  } from "@angular/core";
// import observable cuz backend returns assynchronous data
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable ({providedIn: 'root'})

export class CrudServices {
  // this below link is the link to the back end
  private baseUrl= "/api/list.json";

  constructor (private http: HttpClient){  }

  //  -CREATE (http.post)    post stuff

  // -READ (http.get)    get stuff

  // -UPDATE (http.put)   update stuff

  // -DELETE (http.delete)   delete stuff

}
