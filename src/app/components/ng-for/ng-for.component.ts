import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Dhaka", "Islamabad",
    "NYC", "Toronto","Kashmir","Beijing"
  ]
  employeeArray:any [] =[
    {empId:121,fName:'AAA',city:'Dhaka',contactNo:"016118134XX"},
    {empId:122,fName:'BBB',city:'Dhaka',contactNo:"016118134XX"},
    {empId:123,fName:'CCC',city:'Dhaka',contactNo:"016118134XX"},
    {empId:124,fName:'DDD',city:'Dhaka',contactNo:"016118134XX"},
  ]
}
