import { NgModule } from '@angular/core'
import { ProcessComponent } from '../Process/Process.component'

@NgModule({
    declarations: [
        ProcessComponent,
    ],
    exports: [
        ProcessComponent
    ]
})
export class ProcessModule { }