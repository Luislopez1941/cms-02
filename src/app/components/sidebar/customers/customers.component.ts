import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { GlobalVariationsService } from '../../../global/global-variations.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export default class CustomersComponent {

  constructor(
    public modal: GlobalVariationsService
  ) {

  }

  openModal(): void {
    this.modal.modalState = true;
  }


  modalCloseCreate(): void {
    this.modal.modalState = false;
  }


}
