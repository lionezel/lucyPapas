import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';

import { PageModule } from './page/page.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ComponentsModule } from './components/components.module';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PageModule,
    FirebaseModule,
    SharedModule,
    ComponentsModule,
    PrimengModule,
    ToastrModule.forRoot(),

    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
