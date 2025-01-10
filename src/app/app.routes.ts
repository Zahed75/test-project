import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './control-statement/control-statement.component';
import {SignalComponent} from './signal/signal.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {GetApiComponent} from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import {TailwindsComponent} from './tailwinds/tailwinds.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Ensures the redirect works
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'ng-class',
    component: NgClassComponent,
  },
  {
    path: 'control-flow',
    component: ControlStatementComponent,
  },
  {
    path:'signal',
    component:SignalComponent
  },
  {
    path:'application-form',
    component:TemplateFormComponent
  },
  {
    path:'get-api',
    component: GetApiComponent
  },
  {
    'path':'Post',
    component: PostApiComponent
  },
  {
    'path':'tailwinds',
    component:TailwindsComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
