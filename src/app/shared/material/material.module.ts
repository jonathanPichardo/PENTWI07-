import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule } from '@angular/material/core';

@NgModule({
    imports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatLineModule
    ],
    exports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatLineModule
    ]
})
export class MaterialModule {}
