import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';
import { DataService } from '../data.service';
import { TimerService } from '../timer.service';


@Component({
  selector: '[app-saved-record]',
  templateUrl: './saved-record.component.html',
  styleUrls: ['./saved-record.component.css'],
  providers: [TimerService]
})
export class SavedRecordComponent implements OnInit, OnDestroy {
  // will need to access this from parent to change what to show within this component
  @Input('editSavedRecord') edit: boolean;

  // index of where particular component falls in master array of SignInRecords @Input('recordIndex') 
  @Input() index: number;
  
  // object to pass to view - is assigned by SHEET component
  @Input() signInRecord: SignInRecord;

  updateRecordButtonClicked: boolean;

  //set to true if salesperson already set (so waitTime not recalculated each time)
  salesPersonSet: boolean;

  //turn on danger flag if wait time past a certain point
  // TODO - allow user to set this threshold
  danger: boolean;


  //turn on warning flag if wait time past a certain point
  // TODO - allow user to set this threshold
  warning: boolean;



  // ---------- *** FIXME *** ----------
  // array of salespeople
  // TODO: ALPHABETECAL ARRAY OF ALL SALESPEOPLE
  // ---> NEED FUNCTIONALITY TO EDIT THIS
  // should be a service?
  salespeople: String[];
 
  timer;
  waitTime: number;



  constructor(private dataService: DataService, private timerService: TimerService) { }

  // initalize default values
  // start TIMER
  ngOnInit() {
    
    // TEST OF COMPONENT LEVEL SERVICE PERSISTENCE
    this.timerService.index = this.index;

    this.danger = false;
    this.warning = false;



    this.salespeople = ['Mary', 'Gretel', 'Sam'];
    this.edit = false;
    this.updateRecordButtonClicked = false;
    this.salesPersonSet = false;
    //this.signInRecord.waitTime = this.timerService.waitTime;

    // if salesperson NOT populated at entry, start timer
    
    if(!this.signInRecord.salesPerson){
      this.signInRecord.waitTimeSeconds = 0;
      this.timer = setInterval(() => {
  
        this.updateWaitTime();
        this.dataService.getAvgWaitTime();
    
  
  
      }, 1000);
  

    // if salesperson assigned right away
    // set everything to zero and display immediately
    } else {

      this.signInRecord.waitTimeSeconds = 0;
      this.signInRecord.waitTime = "0:00";
    }
    


    
  }

//FIXME --> NEEDS TO UPDATE WAITTIMESECONDS OF RECORD WITHIN SERVICE

// increments wait time in seconds, then converts to string to display
// used in setInterval timer over and over to create a "clock"
  updateWaitTime(){
    this.signInRecord.waitTimeSeconds = this.signInRecord.waitTimeSeconds +  1;
    //this.dataService.records[this.index].waitTimeSeconds = this.signInRecord.waitTimeSeconds;
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
    

    // set warning flags
    // 1. warning flag
    if(this.signInRecord.waitTimeSeconds >=this.dataService.warningThreshold && this.signInRecord.waitTimeSeconds < this.dataService.dangerThreshold ){

      this.warning = true;
      this.danger = false;

    } 
    // 2. danger flag
    if(this.signInRecord.waitTimeSeconds >= this.dataService.dangerThreshold ){

      this.warning = false;
      this.danger = true;

    } 

   
 


  
    

  }




    // embed hostlistener on to this directive
    // when you click on a record, it was be editable
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

    //  *****INSERT WAIT TIME******
    // if a sales person is entered
    // --populate timeHelped
    // --stop timer
    // update this exact object in service array

    if (this.signInRecord.salesPerson && !this.salesPersonSet){
     
  

      // get time helped (as date), store into property
      this.signInRecord.timeHelped = new Date();

      // get time helped (as String), store into property
      this.signInRecord.timeHelpedHoursString = this.signInRecord.timeHelped.toLocaleTimeString();


      this.salesPersonSet = true;

      // stop timer
      clearInterval(this.timer);

    }


    //emit event to tell parent to calculate avg wait time
    // catch this in stats so it can subscribe onInit and update
    this.dataService.recordChangeEvent.emit();

  }

  // necessary because clicking button on row also triggers edit=true event
  onUpdateRecordButton(){
    console.log("this button was clicked!");
    this.updateRecordButtonClicked = true;
    this.onUpdateRecord();
    
  }




  ngOnDestroy(): void {
    clearInterval(this.timer);

  }


}
