import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() scrollToSection = new EventEmitter<string>();

  goToSection(section: string) {
    this.scrollToSection.emit(section);
  }
}
