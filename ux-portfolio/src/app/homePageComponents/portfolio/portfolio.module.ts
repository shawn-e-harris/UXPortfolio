import { NgModule } from '@angular/core'
import { PortfolioComponent } from '../Portfolio/Portfolio.component'

@NgModule({
    declarations: [
        PortfolioComponent,
    ],
    exports: [
        PortfolioComponent
    ]
})
export class PortfolioModule { }