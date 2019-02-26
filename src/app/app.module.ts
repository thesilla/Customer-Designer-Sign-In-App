import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { RecordComponent } from './record/record.component';
import {FormsModule} from '@angular/forms';
import { SavedRecordComponent } from './saved-record/saved-record.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    RecordComponent,
    SavedRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
