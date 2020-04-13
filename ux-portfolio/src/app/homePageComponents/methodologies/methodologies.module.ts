import { NgModule } from '@angular/core'
import { MethodologiesComponent } from '../methodologies/methodologies.component'

@NgModule({
    declarations: [
        MethodologiesComponent,
    ],
    exports: [
        MethodologiesComponent
    ]
})
export class MethodologiesModule { }