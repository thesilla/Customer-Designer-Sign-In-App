import { Injectable } from '@angular/core';
import { DataService } from './data.service';

// service used for tracking timer of each saved sign-in record
// persistence necessary for keeping timer running even when sign in page is navigated away from

@Injectable()
export class TimerService {

index: number; // holds index of particular component (as place in records array)
waitTime: String; 
waitTimeSeconds: number;
timer;


constructor(private dataService: DataService){

    this.timer = setInterval(() => {
  
        this.updateWaitTime();
        //this.dataService.getAvgWaitTime();
    
  
  
      }, 1000);


}

// FIXME - CATCH EVENTS THAT START/STOP TIMER

// increments wait time in seconds, then converts to string to display
// used in setInterval timer over and over to create a "clock"
updateWaitTime(){
    this.waitTimeSeconds = this.waitTimeSeconds +  1;
    //this.dataService.records[this.index].waitTimeSeconds = this.signInRecord.waitTimeSeconds;
    // pull minutes and seconds to create wait time string
    var minutes = Math.floor(this.waitTimeSeconds / 60);
    var seconds = Math.floor(this.waitTimeSeconds % 60);
    
    // if less than 10 seconds, add 0 in front (i.e 09 instead of  9)
    var secondsTyped: String;
    if (seconds < 10){

      secondsTyped = "0" + seconds;
    } else {

      secondsTyped = "" + seconds;

    }
    
    this.waitTime = minutes + ":" + secondsTyped;
    

    // FIXME -- > WARNING FLAGS -- > MOVE THIS TO TIMER SERVICE
    // set warning flags
    // 1. warning flag
    /*
    if(this.waitTimeSeconds >=this.dataService.warningThreshold && this.waitTimeSeconds < this.dataService.dangerThreshold ){

      this.warning = true;
      this.danger = false;

    } 
    // 2. danger flag
    if(this.signInRecord.waitTimeSeconds >= this.dataService.dangerThreshold ){

      this.warning = false;
      this.danger = true;

    } 
    */

   
 


  
    

  }



}