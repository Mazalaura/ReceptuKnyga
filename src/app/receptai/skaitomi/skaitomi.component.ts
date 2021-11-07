import { Component, OnInit } from '@angular/core';
import { ReceptaiModel } from 'src/app/models/receptaimodel.model';
import {ReceptaiService} from 'src/app/service/receptai.service';

@Component({
  selector: 'app-skaitomi',
  templateUrl: './skaitomi.component.html',
  styleUrls: ['./skaitomi.component.css']
})
export class SkaitomiComponent implements OnInit {

  public receptai:ReceptaiModel[];

  constructor(private receptaiService:ReceptaiService) { }

  ngOnInit(): void {
    this.receptaiService.getReceptai().subscribe((response)=>{
      this.receptai=response;
    });
  }
}
