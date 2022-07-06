import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { authInterface } from './authInterface';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptionsPost = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    }),
    observe: 'response'
  }

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'X', {
      panelClass: 'errorMsg', 
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom' 
    })
  }

  public authUser(auth: object): Observable<any>{
    return this.httpClient.post<authInterface>(`${API_PATH}/auth`,auth , {observe: 'response'})
  }

  public getGamesList(): Observable<any>{
    return this.httpClient.get(`${API_PATH}/games`, {observe: 'response'})
  }

  public getGameId(id: string|null): Observable<any>{
    return this.httpClient.get(`${API_PATH}/games/${id}`, {observe: 'response'})
  }
}
