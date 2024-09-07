import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalVariationsService } from '../../../../global/global-variations.service';

@Component({
  selector: 'app-toats-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toats-success.component.html',
  styleUrl: './toats-success.component.css'
})
export class ToatsSuccessComponent {
  constructor (
    public toast: GlobalVariationsService
  ) {

  }

}
