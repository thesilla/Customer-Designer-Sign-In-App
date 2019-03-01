import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sign-in';
  



// sets project background
  getUrl()
  {
    return "url('../assets/images/bricks.jpg')";
  }






}
