import { Injectable } from '@angular/core';
import { Organization } from './organization';
@Injectable({
  providedIn: 'root'
})
export class MmgService {

  constructor() { }



  isWorkingHours(): boolean{
    const now = new Date()
    const dayOfWeek = now.getDay()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    if(dayOfWeek>=0 && dayOfWeek <=5){
      if((hours === 8 && minutes >= 0) || (hours > 8 && hours < 20) || (hours === 20 && minutes >=0)){
        return true
      }
    }
    return false
  }
}
