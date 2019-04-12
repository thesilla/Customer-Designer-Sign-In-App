import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'; //http service from HttpModule
import 'rxjs/Rx'; //unlock operators

import {Observable} from 'rxjs/Observable';
import { SignInRecord } from './shared/sign-in.model';

@Injectable()
export class DataAccessService {

    records: SignInRecord[] = [];
    constructor(private http: Http){ }

    getRecords(){
        return this.http.get('http://localhost/sign-in/db/get_records.php') // basically must be subscribed to for it to do anything
        
        .map(
            (response: Response) => {
                const data = response.json();
                return data; // returns JSON object

            }
              
        )
         
       
    }
    



}