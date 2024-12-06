import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVehicleInsuranceComponent } from './add-vehicle-insurance/add-vehicle-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleInsuranceComponent // Declare components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // Import Angular modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
