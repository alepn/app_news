import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNewsPageRoutingModule } from './modal-news-routing.module';

import { ModalNewsPage } from './modal-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNewsPageRoutingModule
  ],
  declarations: [ModalNewsPage]
})
export class ModalNewsPageModule {}
