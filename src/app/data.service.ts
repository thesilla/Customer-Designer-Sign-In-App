import {SignInRecord} from "src\\app\\shared\\sign-in.model";

export class DataService{


    // global records array
    // normally we would grab this from database
    records: SignInRecord[] = [

        new SignInRecord(
                "Max", 
                "Red",
                "Danny D",
                "Rehobeth Beach",
                "blahblahblahblah",
                new Date(),
                "Mary",
                null,
                
                "",
                0,

                0,
                "0:00",
                "0:00"



        )

    ];

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
    

}