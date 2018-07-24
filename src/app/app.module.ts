import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyMaterialsModule } from './modules/my-materials/my-materials.module';


import { AppComponent } from './app.component';
import { ToDOComponent } from './to-do/to-do.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CommunityComponent } from './community/community.component';
import { routing } from './app.routing';
import { AddCommunityComponent } from './community/add-community/add-community.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './core/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDOComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CommunityComponent,
    AddCommunityComponent,
    CalculatorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyMaterialsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
