import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.scss']
})
export class GetbyidComponent implements OnInit {

  p$:any
  onInput(event:any){
    this.p$=this.cars.Byid(event.target.value)
  }
  constructor(private cars:CarsService,private http:HttpClient) {}
  ngOnInit(): void {
  }

}
