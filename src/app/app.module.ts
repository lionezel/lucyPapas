import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageModule } from './page/page.module';
import { FirebaseModule } from './firebase/firebase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PageModule, FirebaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
