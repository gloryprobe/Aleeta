import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    HomeLandingComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
