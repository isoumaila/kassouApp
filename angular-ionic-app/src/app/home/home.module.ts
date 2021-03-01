import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeRouter } from './home.router';
import { HomepageimageComponent } from '../components/homepageimage/homepageimage.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
   // HomePageRoutingModule
   HomeRouter
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
