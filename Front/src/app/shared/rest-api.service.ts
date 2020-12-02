import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classe } from '../shared/classe';
import { Personnage } from '../shared/personnage';
import { Item } from '../shared/item';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PersonnageComponent } from '../personnage/personnage.component';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employees list


  /*************************************    USER        ************************************** */
  //insert user
  createUser(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  auth(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/auth', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  /*************************************************************************** */

  /********************************* ITEM ****************************************** */
  getItem(): Observable<Item>{
    return this.http.get<Item>(this.apiURL+ '/item').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  createItem(item):Observable<Item>{
    return this.http.post<Item>(this.apiURL+ '/item',JSON.stringify(item), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  deleteItem(id):Observable<Item>{
    return this.http.delete<Item>(this.apiURL+ '/item/'+id, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  updateItem(id,item):Observable<Item>{
    return this.http.put<Item>(this.apiURL+ '/item/'+id,JSON.stringify(item), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /*************************************************************************** */




  getClasses(): Observable<Classe> {
    return this.http.get<Classe>(this.apiURL + '/classe')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getPersonnage(idUser): Observable<Personnage>{
    return this.http.get<Personnage>(this.apiURL+ '/personnageUser/' + idUser).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getP(): Observable<Personnage> {
    return this.http.get<Personnage>(this.apiURL + '/personnage')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method => Fetch employee
  getClasse(id): Observable<Classe> {
    return this.http.get<Classe>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Classe> {
    return this.http.post<Classe>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Classe> {
    return this.http.put<Classe>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deletePersonnage(id){
    return this.http.delete<Classe>(this.apiURL + '/personnage/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
