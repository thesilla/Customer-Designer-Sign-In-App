import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { RecordComponent } from './record/record.component';
import {FormsModule} from '@angular/forms';
import { SavedRecordComponent } from './saved-record/saved-record.component';
import { HeaderComponent } from './header/header.component';
import { BasicHighlightDirective} from './header/directives/basic-highlight.directive';
import { BetterDirectiveDirective } from './header/directives/better-directive.directive';
import { UnlessDirective } from './header/directives/unless.directive';
import {DataService} from 'src\\app\\data.service';



@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    RecordComponent,
    SavedRecordComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
    UnlessDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
