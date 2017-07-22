import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailComponent } from './match-detail.component'

const routes: Routes = [
{path: 'match', component: MatchDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
