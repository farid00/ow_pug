
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Match } from './match';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Player } from 'app/player';
import { OwSocket } from 'app/socket.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MatchService {

  constructor(private http: Http, private router: Router, private authHttp: AuthHttp, private socketService: OwSocket) {}

  //we need to pass in this to map in order
  //for it to allow for nested calls 
  //fat arrow functions bind the scope lexically automatically


  vote_for_team(winners: number): Observable<string> {
    let body = { winning_team: winners };
    return this.authHttp.post('http://node-express-env.jvbqiv8vxf.us-west-2.elasticbeanstalk.com/api/match/vote', body)
              .map(val => val)
              .catch(this.handleError); 
  }

   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}



