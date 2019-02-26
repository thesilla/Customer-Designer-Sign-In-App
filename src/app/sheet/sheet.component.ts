import { Component, OnInit } from '@angular/core';
import { SignInRecord } from '../shared/sign-in.model';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  records: SignInRecord[] = [];

  public onRecordAdded(record: SignInRecord){

    this.records.push(record);
    console.log(record.customerName);


  }
  constructor() { }

  ngOnInit() {
  }

}
