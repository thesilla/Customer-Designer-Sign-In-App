import { Component, OnInit } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';

// USING THIS TO TEST OBSERVABLES

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  constructor() { }


// Observables are declarative that is, you define the function for publishing values, but it is not executed until the consumer subscribes to it
  simpleObservable = new Observable((observer) => {
    
    // observable execution
    observer.next("hello");
    observer.complete();
})


  ngOnInit() {


      // subscribe to the observable
    this.simpleObservable.subscribe((num) => { 
      console.log(num);
      }
    );


  }







}
