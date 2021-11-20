import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { User } from '../auth/user.model';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy{
  public userSubscribtion: Subscription;
  public isShown;
  public loggedIn = false;
  public user: User = null;

  constructor(private authService:AuthService, private router:Router, private navigationService: NavigationService) {}

  ngOnInit(): void {
     this.userSubscribtion = this.authService.userSub.subscribe((user:User)=>{
       if(user != null){
         this.loggedIn=true;
         this.user=user;
       } else {
         this.loggedIn=false;
         this.user=null;
       }
       this.loggedIn=true;
       this.user=user;
     });
  }

  ngOnDestroy():void{
    this.userSubscribtion.unsubscribe()
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onClickLogin(){
    this.navigationService.loginSubject.next(true);
  }

  onClickRegister() {
    this.navigationService.loginSubject.next(false);
  }

  onLoginLogout() {
    console.log("logout");
    if (this.loggedIn == true) {
      this.authService.logout();
    } else {
      this.router.navigate(['/auth'])
    }
    this.navigationService.loginSubject.next(true);

    this.authService.reloadCurrentRoute();
  }

}
