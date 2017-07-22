import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent} from './team-detail.component'
import { MatchDetailComponent} from './match-detail.component'
import { MatchRoutingModule } from './match-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule
  ],
  declarations: [
  	TeamDetailComponent,
  	MatchDetailComponent,
  ]
})
export class MatchModule { }
