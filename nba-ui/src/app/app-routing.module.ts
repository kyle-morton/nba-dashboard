import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', loadChildren: () => PublicModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'admin', loadChildren: () => AdminModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
