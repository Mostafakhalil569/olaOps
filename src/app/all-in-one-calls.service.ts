import { Injectable } from '@angular/core';
import { ApiResponse, Organization, Schedule } from './organization';
import { OrganizationService } from './organization.service';
import { BehaviorSubject } from 'rxjs';
import { MmgService } from './mmg.service';
@Injectable({
  providedIn: 'root'
})
export class AllInOneCallsService {
  oncallDetails:object |any
  scheduleID:number | undefined;
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private Organization:OrganizationService,private mmgservice:MmgService) { }


  fix(res: ApiResponse) {
      if (this.mmgservice.isWorkingHours()) {
    const moDevOpsTeam = res.results.find(schedule => schedule.name === "MO_Devops Team");
    if (moDevOpsTeam) {
        this.scheduleID = moDevOpsTeam.id;
    }
    }
  }
  

  whoIsOncall(scheduleNumber:number){
    this.Organization.getScheduleForCustomer(scheduleNumber).subscribe((res) => {
      if (res.results && res.results.length > 0) {
        ////////////////////////////////////////////
        this.scheduleID = res.results[0].id;
  /////////////////////////////////////////////////////////////////
        this.Organization.getOncallPerSchedule(this.scheduleID ?? 0, 1).subscribe((oncallRes) => {
          const currentOncallId = oncallRes.current;
          const currentoncall = oncallRes.contacts.find((contact: any) => contact.id === currentOncallId);
  
          if (currentoncall) {
            this.oncallDetails = currentoncall;
            console.log(this.oncallDetails)
          } else {
            console.log('No matching contact found.');
          }
        }, (oncallError) => {
          console.error('Error fetching oncall details:', oncallError);
        }).add(() => {
          this.loadingSubject.next(true);
        });
      } else {
        console.log('No schedule results found.');
        this.loadingSubject.next(true);
      }
    }, (scheduleError) => {
      console.error('Error fetching schedule:', scheduleError);
      this.loadingSubject.next(true);
    });
  }
  

}
