import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPageRoutingModule } from './component-routing.module';

import { ComponentPage } from './component.page';
import { ModalComponent } from '../modal/modal.component';
import { SliderPage } from '../sliders/sliders.page';
import { TabsPage } from '../tabs/tabs.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPageRoutingModule
  ],
  declarations: [ComponentPage, ModalComponent, SliderPage, TabsPage]
})
export class ComponentPageModule {}
