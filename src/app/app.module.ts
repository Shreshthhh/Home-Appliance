import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplianceListComponent } from './appliance-list/appliance-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateApplianceComponent } from './create-appliance/create-appliance.component';
import { FormsModule } from '@angular/forms';
import { UpdateApplianceComponent } from './update-appliance/update-appliance.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplianceListComponent,
    CreateApplianceComponent,
    UpdateApplianceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
