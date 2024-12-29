import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GoldRateComponent } from "./components/gold-rate/gold-rate.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule ,NavbarComponent ,GoldRateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gold-max-app';
}
