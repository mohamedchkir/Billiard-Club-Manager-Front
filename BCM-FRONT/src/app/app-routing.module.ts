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
import {ServiceDashComponent} from "./view/component/service-dash/service-dash.component";
import {NewsComponent} from "./view/page/news/news.component";
import {ClubDetailsComponent} from "./view/page/club-details/club-details.component";
import {clubFoundGuard} from "./core/guard/club-found/club-found.guard";
import {NotFoundComponent} from "./view/page/not-found/not-found.component";
import {hasRightAuthorityGuard} from "./core/guard/has-right-authority/has-right-authority.guard";
import {ForgotPasswordPageComponent} from "./view/page/forgot-password-page/forgot-password-page.component";
import {ResetPasswordPageComponent} from "./view/page/reset-password-page/reset-password-page.component";
import {authenticateGuard} from "./core/guard/authenticate/authenticate.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent,canActivate: [hasRightAuthorityGuard,authenticateGuard], data: {authority: 'ROLE_CLIENT'}},
  {path: 'club', component: ClubComponent,canActivate: [hasRightAuthorityGuard,authenticateGuard], data: {authority: 'ROLE_CLIENT'}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordPageComponent},
  {path: 'reset-password', component: ResetPasswordPageComponent},
  {path: 'player', component: PlayerComponent,canActivate: [hasRightAuthorityGuard,authenticateGuard], data: {authority: 'ROLE_CLIENT'}},
  {path: 'news', component: NewsComponent,canActivate: [hasRightAuthorityGuard,authenticateGuard], data: {authority: 'ROLE_CLIENT'}},
  {path: '404', component: NotFoundComponent},
  {path: 'club-details/:id', component: ClubDetailsComponent, canActivate: [clubFoundGuard, hasRightAuthorityGuard,authenticateGuard], data: {authority: 'ROLE_CLIENT'}},



  {path: 'dashboard', component: DashboardComponent, canActivate: [hasRightAuthorityGuard,authenticateGuard], data: {authority: 'ROLE_MANAGER'},
    children: [
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
