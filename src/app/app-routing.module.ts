import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreenComponent} from "./features/start-screen/start-screen.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {RecruitmentComponent} from "./features/recruitment/recruitment.component";
import {FactionsComponent} from "./features/factions/factions.component";

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recruitment', component: RecruitmentComponent },
  { path: 'factions', component: FactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
