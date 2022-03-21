import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  Cars: any = ['Audi', 'BMW', 'Mercedes', 'Toyota' ,'Mitsubishi']
  alert:any = 'invalid'
  alert1: 'true' | 'false' = 'false'
  alert2: 'true' | 'false' = 'false'
  employees$:any = this.cars.getAll()
  //test
  productId:number=4;
  
  form = new FormGroup(
    {  
      cars: new FormControl('',Validators.required ),
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
  bt(){
/*       console.log("success")
      this.emp.create(this.form.value)
      .pipe(
        switchMap(_ =>
          this.emp.Byid(this.productId)
            .pipe(
              tap(_ => this.employees$ = this.employees$),
              tap(_ => this.form.reset())
            )
        )
      ).subscribe() */
      if(this.form.valid){ 
      let data:any[]=this.form.value
      this.http.post(`${environment.api}/cars`,data).subscribe()
      this.form.reset()
      console.log(this.form.value);
      window.confirm('Successfully added')
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



  constructor(private cars:CarsService,private http:HttpClient, private router:Router) {}
  ngOnInit(): void {
  }

}
