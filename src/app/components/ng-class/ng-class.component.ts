import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBgColor: string = "bg-primary"

  isChecked: boolean = false;
  divBg2ndColor: string = "bg-primary"
  div3ClassName: string = ''

  addDivColor(className: string) {
    this.divBgColor = className
  }
}
