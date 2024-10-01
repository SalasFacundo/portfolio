import { Component } from '@angular/core';
@Component({
  selector: 'about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  sendEmail(){
    window.location.href = "mailto:salasfacundo96@gmail.com";
  }
  openLinkedin(){
    window.open('https://www.linkedin.com/in/salasfacundo/', '_blank');

  }

}
