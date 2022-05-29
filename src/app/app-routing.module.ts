import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes : Routes = [
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'about', component : AboutComponent
  },
  {
    path : 'contact', component : ContactComponent
  },
  {
    path : 'posts', //loadChildren : './pages/posts/post.module#PostsModule' //Estandar de angular old / deprecated
    loadChildren : () => import('./pages/posts/posts.module').then(m => m.PostsModule) //Estandar de ionic
  },
  {
    path: '**', redirectTo : 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
