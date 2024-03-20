import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPagePage } from './custom-page.page';
import { CustomPageWithId} from './custom-page-with-id/custom-page-with-id';

const routes: Routes = [
  {
    path: '',
    component: CustomPagePage
  
  },
  {
    path: 'custom-page-with-id/:id',
    component: CustomPageWithId
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class   CustomPagePageRoutingModule { }
