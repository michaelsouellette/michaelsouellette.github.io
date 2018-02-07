import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MichaelSidenav } from './common/sidenav';

// Components
import { PortfolioComponent } from './components/portfolio';
import { SkillsComponent } from './components/skills';


@NgModule({
  declarations: [
    AppComponent,
    MichaelSidenav,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
