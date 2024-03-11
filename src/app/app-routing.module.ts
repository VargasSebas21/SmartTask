import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'crud', loadChildren: () => import('./pages/user-crud/user.module').then(m => m.UserModule) },
  { path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
