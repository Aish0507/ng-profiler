import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentTreeComponent } from './components/component-tree/component-tree.component';
import { SharedModule } from "./shared/shared.module";
import { ComponentInfoComponent } from './components/component-info/component-info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NZ_ICONS } from "ng-zorro-antd";
import { IconDefinition } from '@ant-design/icons-angular';
import { ZoomInOutline, ZoomOutOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ ZoomInOutline, ZoomOutOutline ];
@NgModule({
  declarations: [
    AppComponent,
    ComponentTreeComponent,
    ComponentInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
