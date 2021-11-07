import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/models/receptaimodel.model';
import {ReceptaiService} from 'src/app/service/receptai.service'


@Component({
  selector: 'app-rasomi',
  templateUrl: './rasomi.component.html',
  styleUrls: ['./rasomi.component.css']
})
export class RasomiComponent implements OnInit {

 reactiveForm:FormGroup;

  constructor(private receptaiService:ReceptaiService) { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      description:new FormControl(null, Validators.required),
      ingredients:new FormArray([])
    });
  }

  onPostReceptai(forma:NgForm){
    console.log(this.reactiveForm.value);   
    const ingredients:Ingredient[]=[];
    this.reactiveForm.value.ingredients.forEach((name:string)=>{
      ingredients.push(new Ingredient(name));
    });
    this.receptaiService.postReceptai(
      this.reactiveForm.value.name,
      this.reactiveForm.value.description,      
      ingredients
    )
      .subscribe((response)=>{
        console.log(response);        
        this.reactiveForm.reset();
      });
    }

    getIngredientsForm(){
      return this.reactiveForm.get('ingredients') as FormArray;
    }

    addInput(){
      const input=new FormControl();
      this.getIngredientsForm().push(input);
    }
}