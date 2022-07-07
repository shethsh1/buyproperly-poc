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
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PropertyEffects } from './core/properties/property.effects';
import { propertiesReducer } from './core/properties/property.reducer';
import { PropertyCardComponent } from './components/property-list/property-card/property-card.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageInterceptor } from './interceptors/language.interceptor';
import { PropertyImageSectionComponent } from './components/property-detail/property-image-section/property-image-section.component';
import { PropertyTextComponent } from './components/property-detail/property-text/property-text.component';
import { HamburgerSliderComponent } from './components/nav/hamburger-slider/hamburger-slider.component';




export function HttpLoaderFactory(http : HttpClient) {
  return new TranslateHttpLoader(http)
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    NavComponent,
    PropertyCardComponent,
    PropertyImageSectionComponent,
    PropertyTextComponent,
    HamburgerSliderComponent,
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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  providers: [
    HttpClient, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
