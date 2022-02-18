import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cond: 'true' | 'false' = 'false'
  current: 'save' | 'cancle' = 'cancle';
  alert1: 'true' | 'false' = 'false'
  alert2: 'true' | 'false' = 'false'
  alert:any = 'invalid'
  j:any = 0
  cars$:any = this.cars.getAll()
  Cars: any = ['Audi', 'BMW', 'Mercedes', 'Toyota' ,'Mitsubishi']
  users$:any = this.cars.getAll2()
  form = new FormGroup(
    {  
      cars: new FormControl('',Validators.required),
      describtion: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      abs: new FormControl(''),
      shusha: new FormControl(''),
      luqi: new FormControl(''),
      bluetooth: new FormControl(''),
      signalizacia: new FormControl(''),
      parkingkontroli: new FormControl(''),
      navigacia: new FormControl(''),
      bort: new FormControl(''),
      multisache: new FormControl(''),
    }
  )
  d(id:any){
    
      this.cars.del(id).subscribe()
      
  }
  r(id:number){
    this.cars.remove(id).subscribe()
    window.location.reload();
  }
  u(id:number){
    if(this.form.valid){ 
      let data:any = this.form.value
      this.cars.update(id,data).subscribe()
      this.form.reset()
      window.location.reload();
      window.confirm( 'Car with id: '+id+' Successfully Edited')
    }else{
      if(this.form.get('describtion')?.invalid && this.form.get('image')?.invalid){
        alert("Invalid")
      }
      else if(this.form.get('describtion')?.invalid){
        alert("describtion is not valid")
      }else if(this.form.get('image')?.invalid){
        alert("image is not valid")
      }
    }
  }
  condintion(id:number){
    this.cond = 'true'
    this.current = 'save'
    this.j = id
  }
  constructor(private cars:CarsService,private http:HttpClient) {}


  ngOnInit(): void {
  }

}
