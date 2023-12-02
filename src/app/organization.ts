export interface Organization {
    name:String;
    id:number;
    // isStatusPageAvailable?:boolean;
    // isOncallAvailable?:boolean;
    // isJiraTicketAvailable?:boolean;
    // whoIsOncall?:object;  
}
export interface Parent {
    id: number;
    name: string;
    children: Child[];
  }
  
  export interface Child {
    id: number;
    name: string;
  }

  export interface ExtendedObject extends Child{
    isOncallAvailable:boolean
  }