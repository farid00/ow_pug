import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';

import { UserAuthFormComponent} from './user-auth-form.component';
import { UserDetailComponent } from './user-detail.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthModule } from './auth.module';
import { OwSocket } from './socket.service';
import { MatchModule } from './match/match.module';
import { MatchRoutingModule } from './match/match-routing.module'



const appRoutes: Routes = [
	{path: 'signup', component: UserAuthFormComponent},
  {path: 'profile', component: UserDetailComponent},
  {
    path: '', 
    redirectTo: '/signup',
    pathMatch: 'full'
  }
	];

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule, 
                  FormsModule, 
                  MatchModule,
                  RouterModule.forRoot(appRoutes), 
                  AuthModule,
                  ],

  declarations: [ 
  	AppComponent,
  	UserAuthFormComponent,
    UserDetailComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ OwSocket ]
})
export class AppModule { }
