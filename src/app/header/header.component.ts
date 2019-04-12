import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { DataAccessService } from '../data-access.service';
import { SignInRecord } from '../shared/sign-in.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private dataService: DataService, private dataAccessService: DataAccessService) { }

  records: SignInRecord[] = [];

  ngOnInit() {

    //this.test();
  }

  


}
