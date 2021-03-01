import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { HomepageimageComponent } from './homepageimage/homepageimage.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, HomepageimageComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, HomepageimageComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
