import { Component, OnInit} from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  records: SignInRecord[] = [];
  
  // allow editing for all row
  // if passed into child component will turn off just for that row
  edit: boolean = false;
  timeInHoursString: String;
 

  public onRecordAdded(record: SignInRecord){
    this.timeInHoursString = record.timeIn.toLocaleTimeString();
   // this.timeInHoursString = "" + record.timeIn.getHours() + ":" + record.timeIn.getMinutes();
    // turn editing for rows off
    this.edit = false;
    this.records.push(record);
    console.log(record.customerName);
  

  }

  // takes SignInRecord object, pulls index
  // inserts this object at that index into records[] array
  public onRecordEdit(record: SignInRecord){

    
    this.records[record.index] = record;
    
    
    console.log(record.customerName);
    console.log(record.shirtJacketColor);
    console.log(record.contractor);
    console.log(record.index);

  }

  //if row clicked, set edit to True here
  // then pass to child property in template
  public onRowClickEdit(){

    if (this.edit == false){

      this.edit = true;

    } 

  }

  public doneEditing(){

    if (this.edit == true){

      this.edit = false;

    }


  }

  constructor() { }

  ngOnInit() {
  }

}
