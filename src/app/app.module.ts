import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from './material.module';

// Libraries
import { SlickModule } from 'ngx-slick';

// Common
import { AppComponent } from './app.component';
import { MichaelSidenav } from './common/sidenav';

// Components
import { ContactComponent } from './components/contact';
import { MainComponent } from './components/main';
import { PortfolioComponent } from './components/portfolio';
import { SkillsComponent } from './components/skills';

// Services
import { WordpressService } from './services/wordpress';

@NgModule({
      declarations: [
            AppComponent,
            MichaelSidenav,
            ContactComponent,
            MainComponent,
            PortfolioComponent,
            SkillsComponent
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            FlexLayoutModule,
            AngularFontAwesomeModule,
            MaterialModule,
            SlickModule.forRoot()
      ],
      providers: [
            WordpressService
      ],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
