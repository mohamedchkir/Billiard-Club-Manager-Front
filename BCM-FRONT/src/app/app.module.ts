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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClubComponent,
    LoginComponent,
    RegisterComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(clubFeature),
    EffectsModule.forFeature([ClubEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
