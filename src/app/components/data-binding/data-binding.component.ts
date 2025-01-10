import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Zahed Hasan";
  rollNo: string = "121";
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter the full name";
  division: string = "bg-danger"
  selectedCity: string = "";

  constructor() {
    console.log(this.firstName)
    this.isActive = false
    console.log(this.isActive)
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 19")
  }

  onCityChange() {
    console.log("City Change")
  }

}
