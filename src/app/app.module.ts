import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'hammerjs';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RoutingModule } from './routing.module';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { SharedModule } from './shared/shared.module';

@NgModule ( {
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports     : [
    BrowserModule,
    RoutingModule,
    AngularFireModule.initializeApp ( environment.firebase ),
    AngularFireAuthModule,
    SharedModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers   : [ AuthGuard, AuthService ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
