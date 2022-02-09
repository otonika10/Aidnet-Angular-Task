import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { GetbyidComponent } from './getbyid/getbyid.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    GetbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'list',
        component: ListComponent,
        
      },
       {
        path: 'byid',
        component: GetbyidComponent,
        
      },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
