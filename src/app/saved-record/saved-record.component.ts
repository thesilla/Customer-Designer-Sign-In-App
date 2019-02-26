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

  @Input('recordCustomerName') customerName: String;
  @Input('recordShirtJacketColor')shirtJacketColor: String;
  @Input('recordContractor') contractor: String;
  @Input('recordProject') project: String;
  @Input('recordNotes') notes: String;
  @Input('recordTimeIn') timeIn: Date;
  @Input('recordSalesPerson') salesPerson: String;
  @Input('recordTimeHelped') timeHelped: Date;
  @Input('recordWaitTime') waitTime: Number;



  public onEdit() {

    if(this.edit == false){

      this.edit = true;

    }

  }

  // generate/send new SignInRecord object in event
  // when caught, will *FIND INDEX* of that component in array and replace that memory space with this object
  @Output('editRecordEvent') editRecord = new EventEmitter<SignInRecord>();
  
  

  public onEditRecord(){

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
