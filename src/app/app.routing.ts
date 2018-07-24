import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { ToDOComponent } from './to-do/to-do.component';
import { AddCommunityComponent } from './community/add-community/add-community.component';
import { CalculatorComponent } from './core/calculator/calculator.component';

const arr: Routes = [
  { path: '', redirectTo: '/community', pathMatch: 'full' },
  { path: 'community', component: CommunityComponent },
  { path: 'todo', component: ToDOComponent },
  { path: 'addCommunity', component: AddCommunityComponent },
  { path: 'calculator', component: CalculatorComponent }

];

export const routing = RouterModule.forRoot(arr);
