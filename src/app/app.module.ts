import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { CensorComponent } from './censor/censor.component';

@NgModule({
  declarations: [
    CensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [CensorComponent]
})
export class AppModule { }
