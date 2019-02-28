import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';


@Component({
  selector: '[app-record]',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  // these take in data from user inputs in view
  customerName: String;
  shirtJacketColor: String;
  contractor: String;
  project: String;
  notes: String;
  timeIn: Date;
  salesPerson: String;
  timeHelped: Date;
  waitTime: String;
  index: number = -1;
  timeInHoursString: String;

  // object creates event, outputs object containing data from input
  // TODO - MAKE MODEL CLASS FOR THIS
  
  
  @Output('recordEvent') recordCreated = new EventEmitter<SignInRecord>();
  
  

  public onAddRecord(){

    // create stamp with current date/time
    let d = new Date(); 
   
    // pass to timeIn
    this.timeIn = d;
    this.timeInHoursString = this.timeIn.toLocaleTimeString();

    this.recordCreated.emit(new SignInRecord(this.customerName,
      this.shirtJacketColor,
      this.contractor,
      this.project,
      this.notes,
      this.timeIn,
      this.salesPerson,
      this.timeHelped,
      this.waitTime,
      0, // wait time in seconds - its 0 if record was first created
      this.index,
      this.timeInHoursString // index set to -1 by default
      ));

      // reset property values
      this.customerName = "";
      this.shirtJacketColor = "";
      this.contractor = "";
      this.project = "";
      this.notes = "";
      this.timeIn = null;
      this.salesPerson = "";
      this.timeHelped = null;
      this.waitTime = null;
      
  }

  constructor() { }

  ngOnInit() {
  }

}
