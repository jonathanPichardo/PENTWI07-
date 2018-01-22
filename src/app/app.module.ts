import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ViewsModule } from './views/views.module';
import { CoreModule } from './core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule.forRoot(),
        ViewsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
