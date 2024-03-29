import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { NewsResolver } from './news.resolver';
import { PostComponent } from './post/post.component';
import { PostResolver } from './post.resolver';

const routes: Routes = [
  { path:'',pathMatch:'full',component: HomeComponent },
  { path:'top', component: TopComponent ,resolve: { message: NewsResolver } },
  { path:'post/:id', component:PostComponent, resolve: {newsData: PostResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
