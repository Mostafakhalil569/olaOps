import { Component,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '../organization.service';
import { Organization, whereToFindMe } from '../organization';
import { MmgService } from '../mmg.service';


@Component({
  selector: 'app-oncall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oncall.component.html',
  styleUrl: './oncall.component.css'
})
  
export class OncallComponent {
  slackCustomers:number[]=[119,112,]
  whatsappCustomers:number[] =[47,143,36,144]



  
  oncallDetails:object |any
  constructor(private organization:OrganizationService,private mmgService:MmgService){}
  customerId:number | undefined;
  scheduleID:number | undefined;
  current_since:any; 
  current_until:any;
  
  formatHoursAndMinutes(dateString: string): string | undefined {
    const dateObject: Date = new Date(dateString);
    console.log(dateObject)
    if (isNaN(dateObject.getTime())) {
        // Invalid date-time string
        return undefined;
    }

    const hours: number = dateObject.getUTCHours();
    const minutes: number = dateObject.getUTCMinutes();

    // Format hours and minutes
    const formattedTime: string = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    
    return formattedTime;
}
  
  // oncallTier:number | undefined;
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
  oncallTier = 1;

  checkTier(tierNumber: string) {
    if (tierNumber !== null) {
      this.oncallTier = parseInt(tierNumber, 10);
    }
    this.organization.getScheduleForCustomer(this.checkdata()).subscribe((res) => {
      if (res.results && res.results.length > 0) {
        if(res.results.some( (schedule: { name: string; }) => schedule.name === "MMG On-call")){
          
          if(this.mmgService.isWorkingHours()) {
            
            this.scheduleID = 191
          }else{
          
            this.scheduleID = 237
          }
        }else{
        this.scheduleID = res.results[0].id;
        }
  
        this.organization.getOncallPerSchedule(this.scheduleID ?? 0, this.oncallTier).subscribe((oncallRes) => {
          this.current_since = this.formatHoursAndMinutes(oncallRes.current_since)
          this.current_until = this.formatHoursAndMinutes(oncallRes.current_until)
          
          const currentOncallId = oncallRes.current;
          const currentoncall = oncallRes.contacts.find((contact: any) => contact.id === currentOncallId);
  
          if (currentoncall || this.oncallTier) {
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
 


  ngOnInit(): void {
    this.organization.getScheduleForCustomer(this.checkdata()).subscribe((res) => {
      if (res.results && res.results.length > 0) {
        if(res.results.some( (schedule: { name: string; }) => schedule.name === "MMG On-call")){
          if(this.mmgService.isWorkingHours()) { 
        this.scheduleID = 191
          }else{
        this.scheduleID = 237
          }
        }else{
        this.scheduleID = res.results[0].id;
        }
        this.organization.getOncallPerSchedule(this.scheduleID ?? 0, 1).subscribe((oncallRes) => {
          console.log(oncallRes.current_since)
          this.current_since = this.formatHoursAndMinutes(oncallRes.current_since)
          this.current_until = this.formatHoursAndMinutes(oncallRes.current_until)
          const currentOncallId = oncallRes.current;
          const currentoncall = oncallRes.contacts.find((contact: any) => contact.id === currentOncallId);
  
          if (currentoncall) {
            this.oncallDetails = currentoncall;
            
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


 getchannelName(id:number):any {
    const contactCustomer:whereToFindMe[]=[
    {id:119,ChannelName:"Slack"},
    {id:112,ChannelName:"Slack"},
    {id:47,ChannelName:"Whatsapp"},
    {id:147,ChannelName:"Whatsapp"},
    {id:36,ChannelName:"Whatsapp - Bolt NOC DevOps Alerts"},
    {id:144,ChannelName:"Whatsapp -Bolt NOC-It"},
    {id:114,ChannelName:"Slack"},
    {id:137,ChannelName:"Slack"},
    {id:124,ChannelName:"Slack"},
    {id:15,ChannelName:"Slack - MoovingOn Channel"},
    {id:67,ChannelName:"Slack - Noc-mmg-Devops"},
    {id:73,ChannelName:"Slack - Noc Devops"},
    {id:79,ChannelName:"Whatsapp"},
  ]

 const channel = contactCustomer.find(item => item.id === id)
 return channel?.ChannelName ?? 'None';
 }



 
  
}
