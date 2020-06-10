import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './views/main-layout/main-layout.component';
import {HackerNewsComponent} from './views/hacker-news/hacker-news.component';

const routes: Routes = [
  {path: '', redirectTo: '/hackerNews', pathMatch: 'full' },
  {path: '', component: MainLayoutComponent,
  children: [
    {path: 'hackerNews',  component: HackerNewsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
