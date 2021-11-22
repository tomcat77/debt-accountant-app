import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtsTableComponent } from './components/debts-table/debts-table.component';

const routes: Routes = [
  {
    path: 'all',
    component: DebtsTableComponent
  }, 
  {
    path: '',
    component: DebtsTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
