import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalVariationsService } from '../../../../global/global-variations.service';

@Component({
  selector: 'app-toats-warning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toats-warning.component.html',
  styleUrl: './toats-warning.component.css'
})
export class ToatsWarningComponent {

  constructor(
    public toast: GlobalVariationsService
  ) {

  }

}
