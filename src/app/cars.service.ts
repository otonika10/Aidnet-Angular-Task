import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any[]>{
    console.log(`${environment.api}/cars`)
    return this.http.get<any[]>(`${environment.api}/cars`)
  }
  getAll2():Observable<any[]>{
    console.log(`${environment.api}/users`)
    return this.http.get<any[]>(`${environment.api}/users`)
  }
  /*   create(emplo:any[]){
    return this.http.post(`${environment.api}/employees`,emplo)
  } */
  Byid(id: number) {  
    return this.http.get<any[]>(`${environment.api}/cars?id=${id}`)
  }
  remove(id: number) {  
    return this.http.delete(`${environment.api}/cars/${id}`)
  }
  del(id: any) {  
    return this.http.delete(`${environment.api}/users/${id}`)
  }
  update(id:number,data:any){
    
    return this.http.put(`${environment.api}/cars/${id}`,data)
  }
}
