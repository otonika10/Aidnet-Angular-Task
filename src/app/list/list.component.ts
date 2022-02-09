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
  }
  u(id:number){
    
    let data:any = this.form.value
    this.cars.update(id,data).subscribe()
  }

  constructor(private cars:CarsService,private http:HttpClient) {}


  ngOnInit(): void {
  }

}
