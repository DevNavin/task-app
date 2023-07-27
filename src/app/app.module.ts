import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui.module';
import { ApiService } from './api.service';
import { AuthGuardService } from './auth-guard.service'
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PublicComponent } from './public/public.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';


@NgModule({
  declarations: [
    PublicComponent,
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    UiModule,HttpClientModule,
    BrowserModule, MatToolbarModule,
    MatSidenavModule,BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
