import { Component, Input, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';
import { OwSocket } from './socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  providers: [ AuthService ],
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  public user: User;
  mode = 'Observable';
  public in_queue: boolean = false;
  private socket: any;
  private readyCheckSub: any;
  constructor(
    private authService: AuthService, private socketService: OwSocket, private router: Router) {}

  ngOnInit(){
    this.authService.get_profile()
                     .subscribe(
                       new_user => this.user = new_user);

    this.socketService.connect();
    this.socket = this.socketService.getSocket();
    this.socket.on('inQueue', function() {
      console.log('answered');
    });
  }

  ngAfterViewInit() {
    var socket = this.socket
    socket.once('gameStarted', (data: any) => this.router.navigate(['/match']));
  }


  joinQueue() {
    this.router.navigate(['/match']);
  }

}
