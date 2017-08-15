import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildRootComponent } from './child-root/child-root.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GrandChildWithParamComponent } from './grand-child-with-param/grand-child-with-param.component';

const routes: Routes = [
  {path: '', component: ChildRootComponent},
  {path: 'grand', component: GrandChildComponent,
    children: [
      {path: ':param', component: GrandChildWithParamComponent }
    ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChildRootComponent, GrandChildComponent, GrandChildWithParamComponent]
})
export class ChildModule { }
