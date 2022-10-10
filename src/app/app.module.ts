import { AccessRoutingModule } from './access/access-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddcontactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AccessRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
