import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  div1Visiable: boolean = true;
  number1: string = '';
  number2: string = '';

  hideDiv1() {
    this.div1Visiable = false;
  }

  showDiv1() {
    this.div1Visiable = true;
  }
}


