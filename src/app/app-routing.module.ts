import { NgModule } from '@angular/core';
import { SheetComponent } from './sheet/sheet.component';
import {Routes, RouterModule} from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [

{path: '', component: SheetComponent},
{path: 'settings', component: SettingsComponent},



];





@NgModule({

imports: [
    RouterModule.forRoot(appRoutes)

],

exports: [RouterModule]
})
export class AppRoutingModule {



}