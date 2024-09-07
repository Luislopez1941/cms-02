import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalVariationsService } from '../../../../global/global-variations.service';

@Component({
  selector: 'app-toats-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toats-error.component.html',
  styleUrl: './toats-error.component.css'
})
export class ToatsErrorComponent {
  constructor (
    public toast: GlobalVariationsService
  ) {

  }

}
