import {catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from './movieInterface';
import { Injectable,  } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable ({providedIn: 'root'})

export class MovieServices {
  private baseUrl= 'api/data';

  constructor (private http: HttpClient){ 
    http.get(this.baseUrl).subscribe(response => {console.log('baseUrl content:', response);});
}

getData(): Observable<IMovie[]> {
  return this.http.get<IMovie[]>(this.baseUrl)
  .pipe(
    tap(response => console.log(JSON.stringify(response)) )
    )
  }

getDataById(id: number): Observable<IMovie>{
  return this.http.get<any>(`${this.baseUrl}/${id}`)

}

updateItem(updatedItem: IMovie) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
  return this.http.put<IMovie[]>(`${this.baseUrl}/${updatedItem.id}`, updatedItem, { headers }) 
}

createItem(savedItem: IMovie) {
  const headers = new HttpHeaders ({'Content-Type' : 'application/json'}); 
  return this.http.post<IMovie>(this.baseUrl, savedItem, { headers })
  .pipe(
    tap(() => console.log('updateItem: ' + savedItem.id)),
  );
}

deleteItemById(id: number): Observable<{}> {
  const headers = new HttpHeaders ({'Content-Type' : 'application/json'}); 
  return this.http.delete<IMovie>(`${this.baseUrl}/${id}`, { headers })
}
private newItem(): IMovie {
    return {
      id: 0,
      firstName: 'null',
      lastName: 'null',
      email: 'null',
      favouriteMovie: 'null',
      movieYear: 0,
     
    };
  }

}
