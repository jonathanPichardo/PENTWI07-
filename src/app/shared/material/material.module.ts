import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatLineModule,
        MatInputModule
    ],
    exports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatLineModule,
        MatInputModule
    ]
})
export class MaterialModule {}
