import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProjectExperience } from '../../models/project-experience';

@Component({
  selector: 'projects-experience',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './projects-experience.component.html',
  styleUrl: './projects-experience.component.scss'
})
export class ProjectsExperienceComponent {

  projects: ProjectExperience[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.httpClient.get<{ projects: ProjectExperience[] }>('assets/data/projectExperience.json')
    .subscribe(response => {
      this.projects = response.projects;
    });
  }

  openUrl(url: string){
    window.open(url, '_blank');
  }
}
