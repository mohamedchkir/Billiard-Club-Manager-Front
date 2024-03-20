import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './view/page/home/home.component';
import {ClubComponent} from './view/page/club/club.component';
import {LoginComponent} from './view/page/login/login.component';
import {RegisterComponent} from './view/page/register/register.component';
import {PlayerComponent} from './view/page/player/player.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ClubEffects} from './core/state/club/club.effects';
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {clubFeature, clubFeatureKey} from "./core/state/club/club.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FooterComponent } from './view/component/footer/footer.component';
import { SearchComponent } from './view/component/search/search.component';
import { NavbarComponent } from './view/component/navbar/navbar.component';
import { StatisticComponent } from './view/component/statistic/statistic.component';
import { PlayerEffects } from './core/state/player/player.effects';
import {playerFeature} from "./core/state/player/player.reducer";
import {FormsModule} from "@angular/forms";
import { CityEffects } from './core/state/city/city.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClubComponent,
    LoginComponent,
    RegisterComponent,
    PlayerComponent,
    FooterComponent,
    SearchComponent,
    NavbarComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(clubFeature),
    StoreModule.forFeature(playerFeature),
    EffectsModule.forFeature([ClubEffects, PlayerEffects, CityEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule
  ],
  providers: [
    provideHttpClient()

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
