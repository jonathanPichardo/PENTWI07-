import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ViewsRoutingModule } from './views-routing.module';

import {
    ListsOverviewComponent,
    ListDetailsComponent,
    ListItemComponent,
    ListSummaryComponent
} from './components';


@NgModule({
    imports: [
        SharedModule,
        ViewsRoutingModule,
        FormsModule
    ],
    declarations: [
        ListsOverviewComponent,
        ListDetailsComponent,
        ListItemComponent,
        ListSummaryComponent
    ],
    exports: [RouterModule]
})
export class ViewsModule {}
