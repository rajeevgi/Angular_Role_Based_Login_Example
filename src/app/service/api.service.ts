import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://localhost:5000/Users";

  constructor(private http : HttpClient) { }

  login(loginObj : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}`, loginObj);
  }
  
}
