import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    ListsOverviewComponent,
    ListDetailsComponent
} from './components';

const routes: Routes = [
    { path: '', component: ListsOverviewComponent, pathMatch: 'full' },
    { path: ':id', component: ListDetailsComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}
