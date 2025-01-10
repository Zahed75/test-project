import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visiable:boolean =true;
  isChecked:boolean =true;

  hideShowDiv1(isShow:boolean){
    this.div1Visiable = isShow
  }

  cityList:string []=[
    "Dhaka",
    "Dhaka",
    "Dhaka",
    "Dhaka",
    "Dhaka",
  ]

}
