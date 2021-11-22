import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ReceptaiModel } from 'src/app/models/receptaimodel.model';
import { NavigationService } from 'src/app/service/navigation.service';
import {ReceptaiService} from 'src/app/service/receptai.service';

@Component({
  selector: 'app-skaitomi',
  templateUrl: './skaitomi.component.html',
  styleUrls: ['./skaitomi.component.css']
})
export class SkaitomiComponent implements OnInit {
  public loggedIn=this.authService.user;
  public currentEmail=this.authService.user.email;
  

  public adminLoggedIn:boolean;


  public receptai:ReceptaiModel[];

  constructor(private receptaiService:ReceptaiService, private navigationService: NavigationService, private authService:AuthService) { }

  ngOnInit(): void {
    this.adminLoggedIn=this.authService.isAdmin;
    // if(this.currentEmail == this.adminEmail){
    //   this.adminLoggedIn=true;
    // }
    this.receptaiService.getReceptai().subscribe((receptas)=>{
      this.receptai=receptas;
    });
  }
  onDeleteRecipe(id:string){
    console.log(id);

    this.receptaiService.deleteReceptai(id).subscribe((response) => {

      this.ngOnInit();
    })
  }
}
