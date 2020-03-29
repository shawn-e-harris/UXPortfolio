import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './universalComponents/navbar/navbar.component';
import { FooterComponent } from './universalComponents/footer/footer.component';
import { InfoComponent } from './universalComponents/info/info.component';
import { HomeDetailsComponent } from './homePageComponents/home-details/home-details.component';
import { SkillsComponent } from './homePageComponents/skills/skills.component';
import { ProcessComponent } from './homePageComponents/process/process.component';
import { MethodologiesComponent } from './homePageComponents/methodologies/methodologies.component';
import { ToolsComponent } from './homePageComponents/tools/tools.component';
import { PortfolioComponent } from './homePageComponents/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InfoComponent,
    HomeDetailsComponent,
    SkillsComponent,
    ProcessComponent,
    MethodologiesComponent,
    ToolsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
