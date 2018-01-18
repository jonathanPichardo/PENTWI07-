import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateService } from './store/state.service';

@NgModule({
    providers: [StateService]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
        if (coreModule) {
            throw Error('Thou shall not run!');
        }
    }

}
