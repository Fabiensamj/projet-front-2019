import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CounterDetailComponent }  from './counter-detail/counter-detail.component';
import { NgxActionCableModule, NgxActionCableConfiguration } from 'ngx-actioncable';
import { ActionCableService } from 'angular2-actioncable';


export function getNgxActionCableConfig(): NgxActionCableConfiguration {
  let config = new NgxActionCableConfiguration( 'wss:https://lp4asgadot.herokuapp.com/counters');
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    CounterDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    NgxActionCableModule.forConfig(getNgxActionCableConfig)
    
  ],
  providers: [ActionCableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
