import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  timer;

  

  getAvgWaitTime(){

    this.dataService.getAvgWaitTime();
  }



  constructor(private dataService: DataService) { }

  
  ngOnInit() {

    // subscribe to change event, update totals every time new record added or changed
    this.dataService.recordChangeEvent.subscribe(() => {
      
      this.dataService.findTotals();
    
    
    });

  }



}
