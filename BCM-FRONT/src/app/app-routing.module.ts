import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './view/page/home/home.component';
import {ClubComponent} from './view/page/club/club.component';
import {LoginComponent} from './view/page/login/login.component';
import {RegisterComponent} from './view/page/register/register.component';
import {PlayerComponent} from './view/page/player/player.component';
import {DashboardComponent} from "./view/page/dashboard/dashboard.component";
import {StatisticComponent} from "./view/component/statistic/statistic.component";
import {UserDashComponent} from "./view/component/user-dash/user-dash.component";
import {ClubDashComponent} from "./view/component/club-dash/club-dash.component";
import {CityDashComponent} from "./view/component/city-dash/city-dash.component";
import {ServiceService} from "./core/service/service/service.service";
import {ServiceDashComponent} from "./view/component/service-dash/service-dash.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'club', component: ClubComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'player', component: PlayerComponent},

  {path: 'dashboard', component: DashboardComponent, children: [
      {path: '', component: StatisticComponent},
      {path: 'user', component: UserDashComponent},
      {path: 'club', component: ClubDashComponent},
      {path: 'city', component: CityDashComponent},
      {path: 'service', component: ServiceDashComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
