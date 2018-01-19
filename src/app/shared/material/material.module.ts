import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        MatListModule,
        MatButtonModule
    ],
    exports: [
      MatListModule,
      MatButtonModule
    ]
})
export class MaterialModule {}
