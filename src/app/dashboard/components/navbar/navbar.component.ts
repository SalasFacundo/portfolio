import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() scrollToSection = new EventEmitter<string>();
  @Output() darkMode = new EventEmitter<boolean>();

  darkModeState: boolean = false;
  darkModeIcon: string = "dark_mode";

  goToSection(section: string) {
    this.scrollToSection.emit(section);
  }

  toogleDark(){
    this.darkModeState = !this.darkModeState;

    if(this.darkModeState){
      this.darkModeIcon = "light_mode";
      this.darkMode.emit(true);
    } else {
      this.darkModeIcon = "dark_mode";
      this.darkMode.emit(false);
    }
  }
}
