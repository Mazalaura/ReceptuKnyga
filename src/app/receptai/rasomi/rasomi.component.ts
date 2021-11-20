import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {ReceptaiService} from 'src/app/service/receptai.service'


@Component({
  selector: 'app-rasomi',
  templateUrl: './rasomi.component.html',
  styleUrls: ['./rasomi.component.css'],
  providers: [DatePipe],
})
export class RasomiComponent implements OnInit {

 receptaiForm:FormGroup;
 public postDate: any = new Date();

  constructor(private receptaiService:ReceptaiService, private fb:FormBuilder, private datePipe:DatePipe) {
    this.postDate = this.datePipe.transform(this.postDate, "short");
   }

  ngOnInit(): void {
    this.receptaiForm=this.fb.group({
      receptasName: ['', [
        Validators.required
      ]],
      receptasText: ['', [
        Validators.required
      ]],

      receptasPrepTime: ['', [
        Validators.required
      ]],
      receptasCookTime: ['', [
        Validators.required
      ]],
      receptasImg: ['', [
        Validators.required
      ]],
      postDate: this.postDate,
      ingredients: this.fb.array([])
    });
    
  }

  get ingredientForms(){
    return this.receptaiForm.get('ingredients') as FormArray;
  }

  addIngredient() {

    const ingredient = this.fb.group({
      ingredient: ['', [
        Validators.required
      ]],
      amount: ['', [
        Validators.required
      ]],
      units: ['', [
        Validators.required
      ]],
    })

    this.ingredientForms.push(ingredient);
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i)
  }

  onPostReceptai(receptaiForm: FormGroup){
    console.log(receptaiForm);   
    this.receptaiService.postReceptai(receptaiForm.value).subscribe((response)=>{
        console.log(response);        
        receptaiForm.reset();
      });
    }

    get receptasName() {
      return this.receptaiForm.get('receptasName');
    }
  
    get receptasText() {
      return this.receptaiForm.get('receptasText');
    }
  
    get receptasPrepTime() {
      return this.receptaiForm.get('receptasPrepTime');
    }
    get receptasCookTime() {
      return this.receptaiForm.get('receptasCookTime');
    }
    get ingredients() {
      return this.receptaiForm.get('ingredients');
    }
    get receptasImg() {
      return this.receptaiForm.get('receptasImg');
    }
}
