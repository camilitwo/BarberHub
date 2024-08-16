import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {CalendarComponent} from "../calendar/calendar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NavbarComponent,
    CalendarComponent,
    FooterComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
