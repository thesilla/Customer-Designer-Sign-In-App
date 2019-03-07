import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';
import { DataService } from '../data.service';
import { Hosted } from 'protractor/built/driverProviders';

@Component({
  selector: '[app-saved-record]',
  templateUrl: './saved-record.component.html',
  styleUrls: ['./saved-record.component.css']
})
export class SavedRecordComponent implements OnInit {
  // will need to access this from parent to change what to show within this component
  @Input('editSavedRecord') edit: boolean;

  // index of where particular component falls in master array of SignInRecords
  @Input('recordIndex') index: number;
  
  // object to pass to view - is assigned by SHEET component
  @Input() signInRecord: SignInRecord;

  updateRecordButtonClicked: boolean;

  //set to true if salesperson already set (so waitTime not recalculated each time)
  salesPersonSet: boolean;


  // ---------- *** FIXME *** ----------
  // array of salespeople
  // TODO: ALPHABETECAL ARRAY OF ALL SALESPEOPLE
  // ---> NEED FUNCTIONALITY TO EDIT THIS
  // should be a service?
  salespeople: String[];
  

  
  


  // initalize default values
  ngOnInit() {

    this.salespeople = ['Mary', 'Gretel', 'Sam'];
    this.edit = false;
    this.updateRecordButtonClicked = false;
    this.salesPersonSet = false;
  }

    // embed hostlistener on to this directive
  @HostListener('click') onclick(){

      // if edit is off
      if (!this.edit ){
  
        // and also if update button wasn't clicked
        if(!this.updateRecordButtonClicked){
  
          //turn editing on
          this.edit = true;
          
        } else { // else means the click was on update button and editing should be off
  
          this.edit = false;
          this.updateRecordButtonClicked = false;// set button tracker back to false
        }
  
      }
  
  }


// what to do once update record button is clicked


  public onUpdateRecord(){



    //if editing is on, turn off
    if(this.edit){

      this.edit = false;
    
    }

    // if a sales person is entered
    // --calculate waitTime/waitTimeSeconds
    // --populate timeHelped
    // update this exact object in service array

    if (this.signInRecord.salesPerson && !this.salesPersonSet){
     
  

      this.signInRecord.timeInHoursString = this.signInRecord.timeIn.toLocaleTimeString();
      // get time helped (as date), store into property
      this.signInRecord.timeHelped = new Date();

      // get time helped (as String), store into property
      this.signInRecord.timeHelpedHoursString = this.signInRecord.timeHelped.toLocaleTimeString();

      // calculate time difference
      var timeDiff = this.signInRecord.timeHelped.getTime().valueOf() - this.signInRecord.timeIn.getTime().valueOf();
  
      // strip the ms
      timeDiff = timeDiff / 1000;
      
      // get seconds, store into property
      this.signInRecord.waitTimeSeconds = Math.round(timeDiff);

      // pull minutes and seconds to create wait time string
      var minutes = Math.floor(this.signInRecord.waitTimeSeconds / 60);
      var seconds = Math.floor(this.signInRecord.waitTimeSeconds % 60);
      
      // if less than 10 seconds, add 0 in front (i.e 09 instead of  9)
      var secondsTyped: String;
      if (seconds < 10){
  
        secondsTyped = "0" + seconds;
      } else {
  
        secondsTyped = "" + seconds;
  
      }
      
      this.signInRecord.waitTime = minutes + ":" + secondsTyped;
      
      this.salesPersonSet = true;

    }


    //emit event to tell parent to calculate avg wait time
    // TODO -need to catch this even somewhere in parent so sibling "stats" can update
    this.dataService.recordChangeEvent.emit();

  }

  onUpdateRecordButton(){
    console.log("this button was clicked!");
    this.updateRecordButtonClicked = true;
    this.onUpdateRecord();
    
  }


  constructor(private dataService: DataService) { }


  

}
