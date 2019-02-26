import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-saved-record]',
  templateUrl: './saved-record.component.html',
  styleUrls: ['./saved-record.component.css']
})
export class SavedRecordComponent implements OnInit {

  @Input('recordCustomerName') customerName: String;
  @Input('recordShirtJacketColor')shirtJacketColor: String;
  @Input('recordContractor') contractor: String;
  @Input('recordProject') project: String;
  @Input('recordNotes') notes: String;
  @Input('recordTimeIn') timeIn: Date;
  @Input('recordSalesPerson') salesPerson: String;
  @Input('recordTimeHelped') timeHelped: Date;
  @Input('recordWaitTime') waitTime: Number;


  constructor() { }

  ngOnInit() {
  }

}
