import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';
import { ProjectsExperienceComponent } from '../../components/projects-experience/projects-experience.component';
import { WhoAmIComponent } from '../../components/who-am-i/who-am-i.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, AboutMeComponent, WorkExperienceComponent, ProjectsExperienceComponent, WhoAmIComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @ViewChild('start') start!: ElementRef;
  @ViewChild('workExperience') experience!: ElementRef;
  @ViewChild('projectsExperience') projects!: ElementRef;
  @ViewChild('aboutMe') about!: ElementRef;

  sectionMap: { [key: string]: ElementRef } = {};

  ngAfterViewInit() {
    this.sectionMap = {
      start: this.start,
      workExperience: this.experience,
      projectsExperience: this.projects,
      aboutMe: this.about};
  }

  scrollToSection(section: string) {
    const element = this.sectionMap[section];
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
