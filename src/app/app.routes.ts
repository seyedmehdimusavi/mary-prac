import { Routes } from '@angular/router';
import { EssayComponent } from './essay/essay.component';

export const routes: Routes = [
  { path: '', redirectTo: '/essay', pathMatch: 'full' },
  { path: 'essay', component: EssayComponent }
];
