import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { ReceptaiModel } from 'src/app/models/receptaimodel.model';
import { ReceptaiService } from 'src/app/service/receptai.service';

@Component({
  selector: 'app-skaitomi-aprasymas',
  templateUrl: './skaitomi-aprasymas.component.html',
  styleUrls: ['./skaitomi-aprasymas.component.css']
})
export class SkaitomiAprasymasComponent implements OnInit {

  
  constructor(private receptaiService:ReceptaiService, private route:ActivatedRoute ) { }

 
  public receptai:ReceptaiModel[];
  public receptas;

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.receptaiService.getReceptai().subscribe((receptai)=>{
      this.receptai=receptai;
    });
  }

  
}
