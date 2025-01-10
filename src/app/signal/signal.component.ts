import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-signal',
  imports: [RouterLink],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',

})
export class SignalComponent {

  firstName = signal("Zahed");
  lastName = signal<string>('Hasan')
  courseName: string = "Angular19"

  rollNo=signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      debugger;
      this.courseName = "NextJs";
      this.firstName.set("CTO")
      debugger;
    }, 5000)
  }

  onIncrement(){
    this.rollNo.update(oldValue => oldValue+1)
  }
}
