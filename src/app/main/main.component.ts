import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization } from '../organization';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpFolderComponent } from '../pop-up-folder/pop-up-folder.component';
import { DialogConfig } from '@angular/cdk/dialog';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent {
  

  constructor(private dialogRef: MatDialog){}

  openDialog(organization: Organization): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%'; 
    dialogConfig.height = '60%'; 
    dialogConfig.data = { organization };
    this.dialogRef.open(PopUpFolderComponent,dialogConfig);
  }
//this will be changed with api calls
arrayOfOrganization: Organization[] =[
  {name:'mmg',isStatusPageAvailable:false,isOncallAvailable:true},
  {name:'armis',isStatusPageAvailable:true,isOncallAvailable:true},
  {name:'logz.io',isOncallAvailable:true},
  {name:'Moovingon',isOncallAvailable:true},
  {name:'sixgil',isOncallAvailable:true},
  {name:'Hunters',isOncallAvailable:true},
  {name:'bolt',isOncallAvailable:false},
  {name:'frontegg',isOncallAvailable:true},
  {name:'avatrade',isOncallAvailable:false},


]
}
