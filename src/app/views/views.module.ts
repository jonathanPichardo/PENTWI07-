import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

import {
    ListsOverviewComponent,
    ListDetailsComponent,
    ListItemComponent,
    ListSummaryComponent
} from './components';


@NgModule({
    imports: [
        CommonModule,
        ViewsRoutingModule
    ],
    declarations: [
        ListsOverviewComponent,
        ListDetailsComponent,
        ListItemComponent,
        ListSummaryComponent
    ]
})
export class ViewsModule {}
