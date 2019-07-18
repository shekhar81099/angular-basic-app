import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {createCustomElement} from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
  
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent,SignupComponent ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, 
                                 { injector: this.injector });
    customElements.define('my-own-element', el);
    const el2 = createCustomElement(SignupComponent, 
                                 { injector: this.injector });
    customElements.define('signup-page', el2);
  }
 }
