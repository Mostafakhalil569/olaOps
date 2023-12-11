import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroment'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private allCurstomersurl = 'http://localhost:3000/api/customers/?format=json';
  private schedulePerCustomerurl = 'http://localhost:3000/api/ocs/?format=json&customer='
  private schedulePerCustomerLimit ='&limit=25&ordering=-updated&page=1'
  private oncallPerScheduleUrl='http://localhost:3000/api/ocs-tier/'
  private oncallPerScheduleTier='/?format=json'
  private activeAlertsperOrganization='http://localhost:3000/api/events/?page=1&limit=25&status=active&open_alerts=%7B%7D&group_by=host&format=json&customer='
  //authorization=enviroment.mv_token
  authorization="Token 5pp-025696b08543d72bdcd4"
  
  constructor(private http: HttpClient) { }


    //get all organizations
  getallorganization(): Observable<any> {
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization,
    });

    return this.http.get(this.allCurstomersurl, { headers });
  }


  getScheduleForCustomer(CustomerNumber:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization,
    });
    const url =`${this.schedulePerCustomerurl}${CustomerNumber}${this.schedulePerCustomerLimit}`
    return this.http.get(url,{headers})
  }


  getOncallPerSchedule(scheduleNumber:number,tierNumber:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization,
    });
    const url =`${this.oncallPerScheduleUrl}${scheduleNumber}_${tierNumber}${this.oncallPerScheduleTier}`
    return this.http.get(url,{headers})
  }

  getActiveAlertsPerorganization(organizationNumber:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization,
    });
    const url =`${this.activeAlertsperOrganization}${organizationNumber}`
    return this.http.get(url,{headers})
  }
}
