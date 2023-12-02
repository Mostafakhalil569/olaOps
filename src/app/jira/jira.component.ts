import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '../organization.service';
@Component({
  selector: 'app-jira',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jira.component.html',
  styleUrl: './jira.component.css'
})
export class JiraComponent {
  constructor(private organization:OrganizationService){}
  
one(){
  this.organization.getallorganization().subscribe((data)=>{
    console.log(data)
    
  })
  console.log("clicked")
}



}
