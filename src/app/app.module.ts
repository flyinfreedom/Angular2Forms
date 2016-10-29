import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';  //-- 將 template-driven 改為 下方的 model-driven
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { Angular2FormRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { BinaryPipe } from './binary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelFormComponent,
    BinaryPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Angular2FormRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
