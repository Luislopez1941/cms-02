import { Component, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit  {

  isToggled: boolean = false;
  isClose: boolean = false;

  activeItem = false

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Inicializa el estado según sea necesario
  }

  modeSwitch() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  toggle() {
    this.isClose = !this.isClose;
  }


}
