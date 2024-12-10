import { Component } from '@angular/core';
import {NgIfComponent} from './components/ng-if/ng-if.component';
import {NgForComponent} from './components/ng-for/ng-for.component';
import {NgClassComponent} from './components/ng-class/ng-class.component';

@Component({
  selector: 'app-root',
  imports: [NgIfComponent,NgForComponent,NgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-project';
}
