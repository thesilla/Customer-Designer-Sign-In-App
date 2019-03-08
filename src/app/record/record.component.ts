import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';
import { DataService } from '../data.service';
import { timingSafeEqual } from 'crypto';


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
  waitTimeSeconds: number;
  index: number = -1;
  timeInHoursString: String;
  timeHelpedHoursString: String = "";

  // array of salespeople
  // TODO: ALPHABETECAL ARRAY OF ALL SALESPEOPLE
  // ---> NEED FUNCTIONALITY TO EDIT THIS
  salespeople: String[] = ['Mary', 'Gretel', 'Sam'];


  // object creates event, outputs object containing data from input

  //@Output('recordEvent') recordCreated = new EventEmitter<SignInRecord>();
  
  

  public onAddRecord(){


    // pass current timestamp into timeIn
    this.timeIn = new Date();

    // if salesperson populated right off the bat
    // --set wait time string to zero
    // --set timeHelped to timeIn
    if(this.salesPerson){

      this.waitTime = "0:00";
      this.timeHelped = this.timeIn;
      this.timeHelpedHoursString = this.timeIn.toLocaleTimeString();
    }
   


      // push object to service
      this.dataService.add(new SignInRecord(this.customerName,
        this.shirtJacketColor,
        this.contractor,
        this.project,
        this.notes,
        this.timeIn,
        this.salesPerson,
        this.timeHelped,
        this.waitTime,
        0, // wait time in seconds - its 0 if record was first created
        this.index,// index set to -1 by default
        this.timeIn.toLocaleTimeString(), 
        this.timeHelpedHoursString // set to "" by default
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
      this.waitTime = "";
      this.waitTimeSeconds = 0; // wait time in seconds - its 0 if record was first created
      this.index = -1;// index set to -1 by default
      this.timeInHoursString = "", 
      this.timeHelpedHoursString = ""; // set to "" by default

      this.dataService.recordChangeEvent.emit();
      
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}

