import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProviderService } from './provider.service';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { component: ContactComponent, path: '' }
]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
    ),
    HttpModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
