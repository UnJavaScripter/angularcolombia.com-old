import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

@NgModule ( {
  imports     : [
    CommonModule,
    MdButtonModule
  ],
  declarations: [ LoginComponent ],
  exports     : [
    LoginComponent
  ]
} )
export class SharedModule {
}
