import { Component,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '../organization.service';


@Component({
  selector: 'app-oncall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oncall.component.html',
  styleUrl: './oncall.component.css'
})
  
export class OncallComponent {
  oncallDetails:object |any
  constructor(private organization:OrganizationService){}
  customerId:number | undefined;
  scheduleID:number | undefined;

  loading=true
  
  @Input() inputDataID:any
  
  checkdata(){
    if(this.inputDataID){
      return  this.customerId=this.inputDataID.id
      
    }else{
      console.error('input data is undefined')
      return null
    }
  }

  ngOnInit(): void {
    this.organization.getScheduleForCustomer(this.checkdata()).subscribe((res) => {
      if (res.results && res.results.length > 0) {
        this.scheduleID = res.results[0].id;
  
        this.organization.getOncallPerSchedule(this.scheduleID ?? 0).subscribe((oncallRes) => {
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
          this.loading = false; 
        });
      } else {
        console.log('No schedule results found.');
        this.loading = false; 
      }
    }, (scheduleError) => {
      console.error('Error fetching schedule:', scheduleError);
      this.loading = false; 
    });
  }
  
}
