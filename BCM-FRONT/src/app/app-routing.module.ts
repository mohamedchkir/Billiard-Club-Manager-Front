import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/page/home/home.component';
import { ClubComponent } from './view/page/club/club.component';
import { LoginComponent } from './view/page/login/login.component';
import { RegisterComponent } from './view/page/register/register.component';
import { PlayerComponent } from './view/page/player/player.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'club', component: ClubComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'player', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
