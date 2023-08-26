import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageModule } from './page/page.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ComponentsModule } from './components/components.module';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    FirebaseModule,
    SharedModule,
    ComponentsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
