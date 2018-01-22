import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';

import { StateService } from '../../core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListExistsService implements CanActivate, CanActivateChild {

    constructor(private readonly stateService: StateService, router: Router) {}

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable < boolean > | Promise < boolean > {
        return this.canActivate(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable < boolean > | Promise < boolean > {

        const id = route.paramMap.get('id');

        return this.stateService.listExists(id);

    }

}
