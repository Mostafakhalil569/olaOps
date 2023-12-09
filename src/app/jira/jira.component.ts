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
  
  def(){
    const apiData = {
      // ... other properties
      fields: "[{\"data\":{\"isTrueDefault\":false,\"match\":\"\",\"type\":\"raw text\",\"path\":[\"host\"],\"start\":\"\",\"position\":1,\"section\":\"[\\\"host\\\"]\",\"end\":\"\",\"falseDefaultValue\":\"\",\"defaultValue\":\"\"},\"name\":\"host\",\"unique\":true,\"fixedMandatory\":true,\"mandatory\":true,\"validate\":{},\"core\":true},{\"name\":\"service\",\"unique\":true,\"data\":{\"isTrueDefault\":false,\"match\":\"\",\"type\":\"raw text\",\"path\":[\"service\"],\"start\":\"\",\"position\":1,\"section\":\"[\\\"service\\\"]\",\"end\":\"\",\"falseDefaultValue\":\"\",\"defaultValue\":\"\"},\"mandatory\":true,\"validate\":{},\"core\":true},{\"name\":\"severity\",\"unique\":false,\"data\":{\"isTrueDefault\":true,\"match\":\"\",\"type\":\"raw text\",\"path\":[\"severity\"],\"start\":\"\",\"position\":1,\"section\":\"[\\\"severity\\\"]\",\"end\":\"\",\"falseDefaultValue\":\"critical\",\"defaultValue\":\"\"},\"mandatory\":true,\"validate\":{},\"core\":true},{\"name\":\"recovery\",\"core\":true,\"data\":[{\"errors\":{},\"validate\":{},\"data\":{\"match\":\"ok\",\"type\":\"contains\",\"path\":[\"severity\"],\"start\":\"\",\"position\":1,\"section\":\"[\\\"severity\\\"]\",\"end\":\"\"}},{\"errors\":{},\"validate\":{},\"data\":{\"match\":\"resolved\",\"type\":\"contains\",\"path\":[\"severity\"],\"start\":\"\",\"position\":1,\"section\":\"[\\\"severity\\\"]\",\"end\":\"\"}}],\"recovery\":true,\"validate\":{},\"enabled\":true},{\"name\":\"value\",\"unique\":false,\"data\":{\"isTrueDefault\":true,\"match\":\"\",\"type\":\"raw text\",\"path\":[\"value\"],\"start\":\"\",\"position\":1,\"section\":\"[\\\"value\\\"]\",\"end\":\"\",\"falseDefaultValue\":\"\",\"defaultValue\":\"\"},\"mandatory\":false,\"validate\":{},\"core\":true},{\"name\":\"org_code\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"org_code\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"org_code\"]}},{\"name\":\"pod\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"pod\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"pod\"]}},{\"name\":\"processor_id\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"processor_id\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"processor_id\"]}},{\"name\":\"processer_group\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"processer_group\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"processer_group\"]}},{\"name\":\"region\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"region\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"region\"]}},{\"name\":\"description\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"description\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"description\"]}},{\"name\":\"processor_execution_type\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"processor_execution_type\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"processor_execution_type\"]}},{\"name\":\"detection_service\",\"core\":false,\"mandatory\":false,\"unique\":false,\"validate\":{},\"data\":{\"type\":\"raw text\",\"section\":\"[\\\"detection_service\\\"]\",\"start\":\"\",\"end\":\"\",\"position\":1,\"defaultValue\":\"\",\"match\":\"\",\"falseDefaultValue\":\"\",\"path\":[\"detection_service\"]}}]",
      // ... other properties
    };
    
    // Parse the fields JSON string
    const fields = JSON.parse(apiData.fields);
    
    // Access the specific property you want (for example, name and type of each field)
    fields.forEach((field: any) => {
      console.log(`Field Name: ${field.name}, Type: ${field.data.type}`);
    });
  }



}
