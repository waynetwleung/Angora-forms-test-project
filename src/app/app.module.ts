import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { hadarComp2 } from "../../customComponent2";
import { hadarComp1 } from "../../customComponent1";
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [AppComponent, FormComponent, hadarComp1, hadarComp2],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}