import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookComponent } from './components/book/book.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'book/:id', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
