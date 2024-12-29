import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'; // For pButton
import { RippleModule } from 'primeng/ripple'; // For pRipple


@Component({
  selector: 'app-gold-rate',
  imports: [ButtonModule,RippleModule],
  templateUrl: './gold-rate.component.html',
  styleUrl: './gold-rate.component.css'
})
export class GoldRateComponent {

}
