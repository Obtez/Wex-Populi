import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './features/start-screen/start-screen.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RecruitmentComponent } from './features/recruitment/recruitment.component';
import {HttpClientModule} from "@angular/common/http";
import { FactionsComponent } from './features/factions/factions.component';
import { ItemsComponent } from './features/items/items.component';
import { ItemFormComponent } from './admin/item-form/item-form.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from "@angular/forms";
import { FighterTypeFormComponent } from './admin/fighter-type-form/fighter-type-form.component';
import {FightersComponent} from "./features/fighters/fighters.component";
import { FighterFormComponent } from './admin/fighter-form/fighter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    DashboardComponent,
    RecruitmentComponent,
    FactionsComponent,
    ItemsComponent,
    ItemFormComponent,
    AdminComponent,
    FighterTypeFormComponent,
    FightersComponent,
    FighterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
