import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';
import { ProjectsExperienceComponent } from '../../components/projects-experience/projects-experience.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, AboutMeComponent, WorkExperienceComponent, ProjectsExperienceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
