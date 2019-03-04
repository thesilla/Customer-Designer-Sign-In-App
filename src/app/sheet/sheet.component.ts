import { Component, OnInit} from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  records: SignInRecord[] = [];
  
  

  public getRecords(){


    this.records = this.dataService.records;
    console.log(this.records[0].timeIn);
  }
 


  // takes SignInRecord object, pulls index
  // inserts this object at that index into records[] array
  public onRecordEdit(record: SignInRecord){

    
    this.records[record.index] = record;
    
 
  }


// inject dataservice
  constructor(private dataService: DataService) { }


// copy current dataservice records array into this one
  ngOnInit() {

    this.records = this.dataService.records;

  }



}
