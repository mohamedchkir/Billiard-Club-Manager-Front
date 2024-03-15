import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ClubComponent } from './page/club/club.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'club', component: ClubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
