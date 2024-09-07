import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GlobalVariationsService } from './global-variations/global-variations.service';
import { ToatsComponent } from './components/utils/toats/toats/toats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ToatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    public toggle: GlobalVariationsService
  ) {

  }

  title = 'ecommerce-cms';



}
