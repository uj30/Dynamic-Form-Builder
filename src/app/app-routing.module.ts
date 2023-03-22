import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/form/builder', pathMatch: 'full' },
  { path: 'form/builder', component: CreateFormComponent },
  { path: 'form/answers', component: ReviewFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
