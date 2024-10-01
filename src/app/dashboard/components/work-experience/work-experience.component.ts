import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../models/work-experience';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'work-experience',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  providers:[HttpClient]
})
export class WorkExperienceComponent implements OnInit {

  works: WorkExperience[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.httpClient.get<{ works: WorkExperience[] }>('assets/data/workExperience.json')
    .subscribe(response => {
      this.works = response.works;
    });
  }
}
