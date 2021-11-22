import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ReceptaiModel } from '../models/receptaimodel.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptaiService {

  receptaiForm: FormGroup;
  status = "";
  myForm: FormGroup;
  loading = false;
  success = false;

  constructor(private authService:AuthService, private http:HttpClient, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.receptaiForm = this.fb.group({
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
      postDate: [''],
      ingredients: this.fb.array([])
    })

    this.receptaiForm.statusChanges.subscribe((status) => {
      this.status = status;
    })
  }

  getReceptai(){
    return this.http.get<{[key:string]:ReceptaiModel}>("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages.json")
    .pipe(map((responseData)=>{
      const receptai:ReceptaiModel[]=[];
      for(const key in responseData){
      receptai.push({...responseData[key], id:key});
      }
      return receptai;
    }))
  }

  postReceptai(receptaiForm: FormGroup){
    const receptai = new ReceptaiModel(this.authService.user.email, this.authService.user.id, receptaiForm);
    return this.http.post<{name:string}>("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages.json", receptai,
    {
      params:new HttpParams().set('auth', this.authService.user.token)
    }
    );
  }

  deleteReceptai(id:string){
    
    return this.http.delete("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages/"+id+".json", 
    {
      params:new HttpParams().set('auth', this.authService.user.token)
    }
    );
  }
}
