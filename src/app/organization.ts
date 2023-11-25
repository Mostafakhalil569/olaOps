export interface Organization {
    name:String;
    isStatusPageAvailable?:boolean;
    isOncallAvailable?:boolean;
    isJiraTicketAvailable?:boolean;
    whoIsOncall?:object;  
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