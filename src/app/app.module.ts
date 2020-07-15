import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WalkInClinicComponent } from './pages/walk-in-clinic/walk-in-clinic.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core'; 
import{TranslateHttpLoader} from '@ngx-translate/http-loader';
import{HttpClientModule,HttpClient} from '@angular/common/http'
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { registerLocaleData } from '@angular/common';
import { core } from '@angular/compiler';
 export function HttpLoaderFactory(http:HttpClient){
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 }
registerLocaleData(localeRu, 'ru', localeRuExtra);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WalkInClinicComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
