import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroment'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private allCurstomersurl = 'https://olaops-server.onrender.com/api/customers/?format=json';
  private schedulePerCustomerurl = 'https://olaops-server.onrender.com/api/ocs/?format=json&customer='
  private schedulePerCustomerLimit ='&limit=25&ordering=-updated&page=1'
  private oncallPerScheduleUrl='https://olaops-server.onrender.com/api/ocs-tier/'
  private oncallPerScheduleTier='/?format=json'
  private activeAlertsperOrganization='https://olaops-server.onrender.com/api/events/?page=1&limit=25&status=active&open_alerts=%7B%7D&group_by=host&format=json&customer='
  authorization=enviroment.mv_token
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
