import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page-404/page-404.component';

import { ChildModule } from './child/child.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'child', loadChildren: 'app/child/child.module.ts#ChildModule'},
  { path: '**', component: Page404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
