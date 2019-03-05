import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {


  

  getAvgWaitTime(){

    this.dataService.getAvgWaitTime();
  }



  constructor(private dataService: DataService) { }

  
  ngOnInit() {

    
  }

}
