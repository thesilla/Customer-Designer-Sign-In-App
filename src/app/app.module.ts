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
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    RecordComponent,
    SavedRecordComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
    UnlessDirective,
    StatsComponent,
    NavbarComponent,
    FooterComponent,
    SettingsComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
