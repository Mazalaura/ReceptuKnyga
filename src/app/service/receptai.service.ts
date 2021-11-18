import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Ingredient, ReceptaiModel } from '../models/receptaimodel.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptaiService {

  constructor(private authService:AuthService, private http:HttpClient) { }

  getReceptai(){
    return this.http.get<{[key:string]:ReceptaiModel}>("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages.json")
    .pipe(map((responseData)=>{
      const receptai:ReceptaiModel[]=[];
      for(const key in responseData){
      receptai.push({...responseData[key], id:key});
      }
      return receptai;
    }));
  }

  getReceptas(id:string){
    return this.http.get<ReceptaiModel>("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages/"+id+".json")
  
  }

  postReceptai(name:string, description:string, url:'', ingredients:Ingredient[]){
    const  receptai=new ReceptaiModel(name, description, this.authService.user.email,this.authService.user.id, url, ingredients);
    return this.http.post<{name:string}>("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages.json", receptai,
    {
      params:new HttpParams().set('auth', this.authService.user.token)
    }
    );
  }

  deleteReceptai(id:string){
    
    return this.http.post<{name:string}>("https://receptuknyga-b5c68-default-rtdb.europe-west1.firebasedatabase.app/messages/"+id+".json", 
    {
      params:new HttpParams().set('auth', this.authService.user.token)
    }
    );
  }
}
