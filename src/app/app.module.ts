import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { BrowserComponent } from './browser/browser.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BrowserComponent,
    TitleBarComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
