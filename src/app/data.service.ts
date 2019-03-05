import {SignInRecord} from "src\\app\\shared\\sign-in.model";
import { OnInit } from '@angular/core';

export class DataService implements OnInit{

    avgWaitTime: string;

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
        recordsCount = recordsCount + 1;  
      
  
      }
     
  
      average =  Math.floor(waitTimeTotal / recordsCount);
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
      }
    

}