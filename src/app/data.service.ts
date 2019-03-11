import {SignInRecord} from "src\\app\\shared\\sign-in.model";
import { OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

export class DataService implements OnInit, OnChanges{

   @Output() recordChangeEvent = new EventEmitter<void>();

   @Output() avgWaitTimeChangeEvent = new EventEmitter<void>();

     
    avgWaitTime: string;

    // wait time flags
    warning: boolean;
    danger: boolean;

    // flag thresholds
    warningThreshold: number;
    dangerThreshold: number;
    
    // Totals properties
    tileSelectionTotal: number;
    fabricationTotal: number;
    tileFabTotal: number;
    placeOrderTotal: number;
    callTotal: number;
    returnTotal: number;
    pickupTotal: number;
    justLookingTotal: number;
    exchangeTotal: number;
    otherTotal: number;

    findTotals(){
  
      this.tileSelectionTotal =0; 
      this.fabricationTotal = 0;
      this.tileFabTotal = 0;
      this.placeOrderTotal = 0;
      this.callTotal = 0;
      this.returnTotal = 0;
      this.pickupTotal = 0;
      this.justLookingTotal = 0;
      this.exchangeTotal = 0;
      this.otherTotal = 0;

      for(let r of this.records){

        switch (r.project) {
          case "Tile Selection":
            this.tileSelectionTotal =  this.tileSelectionTotal + 1;
            break;
          case "Fabrication":
            this.fabricationTotal = this.fabricationTotal + 1;
            break;
          case "Tile + Fab Selection":
            this.tileFabTotal = this.tileFabTotal + 1;
            break;
          case "Place Order":
            this.placeOrderTotal = this.placeOrderTotal + 1;
            break;
          case "Call":
            this.callTotal = this.callTotal + 1;
            break;
          case "Return":
            this.returnTotal = this.returnTotal + 1;
            break;
          case "Pick Up":
            this.pickupTotal = this.pickupTotal + 1;
          case "Just Looking":
            this.justLookingTotal = this.justLookingTotal + 1;
          case "Exchange":
            this.exchangeTotal = this.exchangeTotal + 1;
          case "Other":
            this.otherTotal = this.otherTotal + 1; 
        }
      }
    }

    // global records array
    // normally we would grab this from database
    records: SignInRecord[] =[];

    // global needs array
    // normally we would grab this from database
    projectNeed: string[] = [

        "Tile Selection",
        "Fabrication",
        "Tile + Fab Selection",
        "Place Order",
        "Call",
        "Return",
        "Pick Up",
        "Just Looking",
        "Exchange",
        "Other"
 
    ];

    // global salespeople array
    // normally we would grab this from database
    // alphabetical order

    salesPeople: string[] = [

        "Megan",
        "Mary",
        "Gretel",
        "Erin",
        "Tracy",
        "Fran",
        "Lisa",
        "Kelly C",
        "Anita",
        "Gina",
        "Liz",
        "Sam",
        "Andrea",
        "Wendy",
        "Cassie",
        "Sarah",
        "Lindsay",
        "Ashley",
        "Morgan",
        "Jessica",
        "Joe",
        "Christina",
        "Jennifer",
        "Mary",
        "Paul",
        "Terry",
        "Yvonne",
        "Anthony",
        "Bryan",
        "Ericka",
        "Jessica",
        "Jaime",
        "Other"
 
    ];

    // global contractors array
    // normally we would grab this from database

    contractors: string[] = [

        "Shone Lumber- Get OSS",
        "Paradise Custom Kitchens- Get OSS",
        "Pats Pizza- Get OSS",
        "Stephen Mottola- Get OSS",
        "Precision Home Design- Get OSS",
        "Other"

    ];


  
    getAvgWaitTime(){
  
      var waitTimeTotal = 0; //total in seconds
      var recordsCount = 0;
      var average = 0;
      for(let r of this.records){
  
        waitTimeTotal = waitTimeTotal + r.waitTimeSeconds;
        

        
      }
       
      recordsCount = this.records.length;
      if (recordsCount != 0){

        average =  waitTimeTotal / recordsCount;
      
      } else {

        average = 0;
      }

      
    
      // pull minutes and seconds to create wait time string
      var minutes = Math.floor(average / 60);
      var seconds = Math.floor(average % 60);
      
      // if less than 10 seconds, add 0 in front (i.e 09 instead of  9)
      var secondsTyped: String;
      if (seconds < 10){
  
        secondsTyped = "0" + seconds;
      } else {
  
        secondsTyped = "" + seconds;
  
      }
      
      this.avgWaitTime = minutes + ":" + secondsTyped;



        // set warning flags
        // 1. warning flag
        if(average >=this.warningThreshold && average < this.dangerThreshold ){

          this.warning = true;
          this.danger = false;

        } 
        // 2. danger flag
        if(average >= this.dangerThreshold ){

          this.warning = false;
          this.danger = true;

        } 
  
  
    }




    add(record: SignInRecord){


        this.records.push(record);


    }

    edit(index: number, record: SignInRecord){


        this.records[index] = record;

    }

    
    print(){

        for(var i = 0; i<this.records.length; i++){

            console.log("Customer Name: " + this.records[i].customerName);
        }

    }

    ngOnInit() {

        this.avgWaitTime = "No Records Added";
        this.danger = false;
        this.warning = false;
        this.warningThreshold = 3; // 5 minutes = 300 seconds
        this.dangerThreshold = 6; // 10 minutes = 600 seconds

      }

      ngOnChanges(){



      }
    

}