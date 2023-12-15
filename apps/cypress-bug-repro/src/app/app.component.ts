import { Component } from '@angular/core';
import { utilText } from '@cypress-bug-repro/utils';

@Component({
  standalone: true,
  selector: 'cypress-bug-repro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  utilText = utilText;
}
