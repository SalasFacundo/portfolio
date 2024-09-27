import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, AboutMeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
