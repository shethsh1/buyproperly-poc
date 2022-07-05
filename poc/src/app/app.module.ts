import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './core/user/user.reducer';
import { UserEffects } from './core/user/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { PropertyEffects } from './core/properties/property.effects';
import { propertiesReducer } from './core/properties/property.reducer';
import { PropertyCardComponent } from './components/property-list/property-card/property-card.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    NavComponent,
    PropertyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([UserEffects, PropertyEffects]),
    StoreModule.forRoot({
      user: loginReducer,
      properties: propertiesReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
