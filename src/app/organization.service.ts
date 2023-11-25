import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroment';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private url = 'http://localhost:3000/api/customers/?format=json';
  
  authorization=enviroment.mv_token
  constructor(private http: HttpClient) { }


    //get all organizations
  getallorganization(): Observable<any> {
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization,
    });

    return this.http.get(this.url, { headers });
  }


}
