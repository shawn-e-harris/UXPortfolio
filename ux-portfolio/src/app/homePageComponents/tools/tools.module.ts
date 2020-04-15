import { NgModule } from '@angular/core'
import { ToolsComponent } from '../tools/tools.component'

@NgModule({
    declarations: [
        ToolsComponent,
    ],
    exports: [
        ToolsComponent
    ]
})
export class ToolsModule { }