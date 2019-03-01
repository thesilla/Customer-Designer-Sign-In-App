import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';

@Component({
  selector: '[app-saved-record]',
  templateUrl: './saved-record.component.html',
  styleUrls: ['./saved-record.component.css']
})
export class SavedRecordComponent implements OnInit {
  // will need to access this from parent to change what to show within this component
  @Input('editSavedRecord') edit: boolean = false;

  // index of where particular component falls in array of SignInRecords
  @Input('recordIndex') index: number;
  
  @Input('recordCustomerName') customerName: String;
  @Input('recordShirtJacketColor')shirtJacketColor: String;
  @Input('recordContractor') contractor: String;
  @Input('recordProject') project: String;
  @Input('recordNotes') notes: String;
  @Input('recordTimeIn') timeIn: Date;
  @Input('recordSalesPerson') salesPerson: String;
  @Input('recordTimeHelped') timeHelped: Date;
  
  // total wait time in string form
  @Input('recordWaitTime') waitTime: String;
  @Input('recordWaitTimeSeconds') waitTimeSeconds: number;
  
  @Input() timeInHoursString: String;
  @Input() timeHelpedHoursString: String;

    // generate/send new SignInRecord object in event
  // when caught, will *FIND INDEX* of that component in array and replace that memory space with this object
  @Output('editRecordEvent') editRecord = new EventEmitter<SignInRecord>();
  
  //total wait time in seconds value
  waitSeconds: number;


  
  @Output() doneEditing = new EventEmitter<void>();

  @Input() startTime: Date;
  @Input() endTime: Date;
  timeDiff: number;
  minutes: number;
  seconds: number;


    // array of salespeople
  // TODO: ALPHABETECAL ARRAY OF ALL SALESPEOPLE
  // ---> NEED FUNCTIONALITY TO EDIT THIS
  salespeople: String[] = ['Mary', 'Gretel', 'Sam'];


  public onEdit() {

    if(this.edit == false){

      this.edit = true;

    }

  }


  
  
// what to do once update record button is clicked
  public onUpdateRecord(){


    // if a sales person is entered
    // --calculate waitTime/waitTimeSeconds
    // --populate timeHelped

    if (this.salesPerson){
     

      console.log(this.salesPerson);
      console.log("Time in is: " + this.timeIn);

      this.timeInHoursString = this.timeIn.toLocaleTimeString();
      // get time helped (as date), store into property
      this.timeHelped = new Date();

      // get time helped (as String), store into property
      this.timeHelpedHoursString = this.timeHelped.toLocaleTimeString();

      // calculate time difference
      this.timeDiff = this.timeHelped.getTime().valueOf() - this.timeIn.getTime().valueOf();
  
  
  
      // strip the ms
      this.timeDiff = this.timeDiff / 1000;
      
   
      // get seconds, store into property
      this.waitTimeSeconds = Math.round(this.timeDiff);

      // pull minutes and seconds to create wait time string
      this.minutes = Math.floor(this.waitTimeSeconds / 60);
      this.seconds = Math.floor(this.waitTimeSeconds % 60);
      
      // if less than 10 seconds, add 0 in front (i.e 09 instead of  9)
      var secondsTyped: String;
      if (this.seconds < 10){
  
        secondsTyped = "0" + this.seconds;
      } else {
  
        secondsTyped = "" + this.seconds;
  
      }
      
      this.waitTime = this.minutes + ":" + secondsTyped;

    }



    //this.edit = false;
    this.doneEditing.emit();
    this.editRecord.emit(new SignInRecord(this.customerName,
      this.shirtJacketColor,
      this.contractor,
      this.project,
      this.notes,
      this.timeIn,
      this.salesPerson,
      this.timeHelped,
      this.waitTime,
      this.waitTimeSeconds,
      this.index,
      this.timeInHoursString,
      this.timeHelpedHoursString
      ));


  }


  constructor() { }

  ngOnInit() {
  }

}
