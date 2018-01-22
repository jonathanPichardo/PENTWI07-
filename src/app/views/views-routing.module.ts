import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    ListsOverviewComponent,
    ListDetailsComponent
} from './components';
import { ListExistsService } from './guards/list-exists.service';

const routes: Routes = [
  { path: ':id', component: ListDetailsComponent, pathMatch: 'full', canActivate: [ListExistsService]  },
  { path: '**', component: ListsOverviewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ListExistsService]
})
export class ViewsRoutingModule {}
