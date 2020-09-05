import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNewsPage } from './modal-news.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNewsPageRoutingModule {}
