import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalVariationsService } from '../../../../global/global-variations.service';


@Component({
  selector: 'app-toats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toats.component.html',
  styleUrl: './toats.component.css'
})
export class ToatsComponent {
  
  constructor (
    public toast: GlobalVariationsService
  ) {

  }


}
