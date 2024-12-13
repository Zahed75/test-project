import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userObj:any ={
    email:'',
    password:'',
    address:'',
    address2:'',
    city:'',
    state:'Dhaka',
    zip:'',
    isTerms:false
  }
  onSave(){
    debugger;
    const formValue = this.userObj
  }

}
