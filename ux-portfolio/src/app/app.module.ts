import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './universalComponents/navbar/navbar.component';
import { FooterComponent } from './universalComponents/footer/footer.component';
import { InfoComponent } from './universalComponents/info/info.component';
import { HomeDetailsComponent } from './homePageComponents/home-details/home-details.component';
import { SkillsModule } from './homePageComponents/skills/skills.module';
import { ProcessModule } from './homePageComponents/process/process.module'
import { MethodologiesModule } from './homePageComponents/methodologies/methodologies.module'
import { ToolsModule } from './homePageComponents/tools/tools.module'
import { PortfolioModule } from './homePageComponents/portfolio/portfolio.module';
import { ReimagineComponent } from './portfolioProjects/reimagine/reimagine/reimagine.component';
import { SprintComponent } from './portfolioProjects/sprint/sprint/sprint.component';
import { TacticalComponent } from './portfolioProjects/tactical/tactical/tactical.component';
import { UploadComponent } from './portfolioProjects/upload/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InfoComponent,
    HomeDetailsComponent,
    ReimagineComponent,
    SprintComponent,
    TacticalComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkillsModule,
    ProcessModule,
    MethodologiesModule,
    ToolsModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
