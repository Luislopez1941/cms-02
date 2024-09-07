import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { GlobalVariationsService } from '../../global-variations/global-variations.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToatsSuccessComponent } from '../../components/utils/toats/toats-success/toats-success.component';
import { HeaderComponent } from '../../components/header/header/header.component';


@Component({
  selector: 'app-root-page',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterOutlet, ToatsSuccessComponent, HeaderComponent],
  templateUrl: './root-page.component.html',
  styleUrl: './root-page.component.css'
})
export class RootPageComponent {
  constructor(
    public toggle: GlobalVariationsService
  ) {
    
  }
}
