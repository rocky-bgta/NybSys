import { NgModule } from '@angular/core';
import { LayoutComponent, HeaderComponent, ContentComponent } from '../layout';

@NgModule({

    declarations: [
        LayoutComponent,
        HeaderComponent,
        ContentComponent
    ],
    exports: [LayoutComponent],
})

export class PageLayoutModule { }
