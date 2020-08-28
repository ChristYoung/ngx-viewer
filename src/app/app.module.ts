import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxViewerModule } from '../../projects/ngx-viewer/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
