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
  @Input() recordViewTimeIn: String
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
  
  //total wait time in seconds value
  waitSeconds: number;


  
  @Output() doneEditing = new EventEmitter<void>();

  @Input() startTime: Date;
  @Input() endTime: Date;
  timeDiff: number;
  minutes: number;
  seconds: number;


   startTimer() {
    this.startTime = new Date();
  };
  
    endTimer() {

     
    this.endTime = new Date();
    this.timeDiff = this.endTime.getTime().valueOf() - this.startTime.getTime().valueOf();



    // strip the ms
    this.timeDiff = this.timeDiff / 1000;
    let totalSeconds = this.timeDiff;


    // get seconds 
    totalSeconds = Math.round(this.timeDiff);
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = Math.floor(totalSeconds % 60);
    
    let secondsTyped: String;
    if (this.seconds < 10){

      secondsTyped = "0" + this.seconds;
    } else {

      secondsTyped = "" + this.seconds;

    }
    

    this.waitTime = this.minutes + ":" + secondsTyped;

    console.log(this.minutes + ":" + secondsTyped);

 










  }







  public onEdit() {

    if(this.edit == false){

      this.edit = true;

    }

  }

  // generate/send new SignInRecord object in event
  // when caught, will *FIND INDEX* of that component in array and replace that memory space with this object
  @Output('editRecordEvent') editRecord = new EventEmitter<SignInRecord>();
  
  
// what to do once update record button is clicked
  public onUpdateRecord(){





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
      this.index
      ));

  }


  constructor() { }

  ngOnInit() {
  }

}
