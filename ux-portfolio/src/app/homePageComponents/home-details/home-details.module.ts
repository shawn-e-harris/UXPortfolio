import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { SkillsModule } from '../skills/skills.module'
import { ProcessModule } from '../process/process.module'
import { HomeDetailsComponent } from '../home-details/home-details.component'

@NgModule({
    declarations: [
        HomeDetailsComponent,
    ],
    imports: [
        BrowserModule,
        SkillsModule,
        ProcessModule
    ]
})
export class HomeDetailsModule { }