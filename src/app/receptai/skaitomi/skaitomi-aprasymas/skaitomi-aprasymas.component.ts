import { Component, Input, OnInit } from '@angular/core';
import { ReceptaiModel } from 'src/app/models/receptaimodel.model';
import { ReceptaiService } from 'src/app/service/receptai.service';

@Component({
  selector: 'app-skaitomi-aprasymas',
  templateUrl: './skaitomi-aprasymas.component.html',
  styleUrls: ['./skaitomi-aprasymas.component.css']
})
export class SkaitomiAprasymasComponent implements OnInit {

  @Input() receptaiData;
  constructor(private receptaiService:ReceptaiService ) { }

 
  public receptai:ReceptaiModel[];

  ngOnInit(): void {
    // let id=this.route.snapshot.params['id'];
    // this.receptaiService.getReceptai().subscribe((response)=>{
    //   this.receptai=response[this.id];
    // });
  }

  
}
