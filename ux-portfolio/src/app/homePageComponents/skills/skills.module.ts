import { NgModule } from '@angular/core'
import { SkillsComponent } from '../skills/skills.component'

@NgModule({
    declarations: [
        SkillsComponent,
    ],
    exports: [
        SkillsComponent
    ]
})
export class SkillsModule { }