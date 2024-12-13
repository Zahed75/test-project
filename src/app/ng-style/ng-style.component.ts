import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {


  divBgColor: string = '';

  addDiv1Color(color: string) {
    this.divBgColor = color;
  }

  addDiv2Color(color: string) {
    this.divBgColor = color;
  }

  myCss:any={
    'background-color':'orange',
    'width':'200px',
    'height':'200px'
  }

}
