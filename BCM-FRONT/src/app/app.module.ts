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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CityEffects } from './core/state/city/city.effects';
import {cityFeature} from "./core/state/city/city.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import { DashboardComponent } from './view/page/dashboard/dashboard.component';
import { UserDashComponent } from './view/component/user-dash/user-dash.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import { ClubDashComponent } from './view/component/club-dash/club-dash.component';
import {MatChip} from "@angular/material/chips";
import { ClubAddDialogComponent } from './view/component/club-add-dialog/club-add-dialog.component';
import {MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatDivider} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import { CityDashComponent } from './view/component/city-dash/city-dash.component';
import { ServiceEffects } from './core/state/service/service.effects';
import { ServiceDashComponent } from './view/component/service-dash/service-dash.component';
import {serviceFeature} from "./core/state/service/service.reducer";
import { NewsComponent } from './view/page/news/news.component';
import { ServiceAddBottomSheetComponent } from './view/component/service-add-bottom-sheet/service-add-bottom-sheet.component';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import { ClubDetailsComponent } from './view/page/club-details/club-details.component';
import {MatTooltip} from "@angular/material/tooltip";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr, ToastrModule} from "ngx-toastr";
import { CityAddBottomSheetComponent } from './view/component/city-add-bottom-sheet/city-add-bottom-sheet.component';
import { UserEffects } from './core/state/user/user.effects';

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
    StatisticComponent,
    DashboardComponent,
    UserDashComponent,
    ClubDashComponent,
    ClubAddDialogComponent,
    CityDashComponent,
    ServiceDashComponent,
    NewsComponent,
    ServiceAddBottomSheetComponent,
    ClubDetailsComponent,
    CityAddBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(clubFeature),
    StoreModule.forFeature(playerFeature),
    StoreModule.forFeature(cityFeature),
    StoreModule.forFeature(serviceFeature),
    EffectsModule.forFeature([ClubEffects, PlayerEffects, CityEffects, ServiceEffects, UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule,
    MatPaginatorModule,
    MatHeaderRow,
    MatRow,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatFormField,
    MatOption,
    MatSelect,
    MatButton,
    MatIcon,
    MatIconButton,
    MatChip,
    MatDialogTitle,
    MatDivider,
    ReactiveFormsModule,
    MatDialogContent,
    MatInput,
    MatCheckbox,
    MatNavList,
    MatListItem,
    MatLine,
    MatFormFieldModule,
    MatTooltip,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
