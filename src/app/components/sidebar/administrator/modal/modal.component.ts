import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalVariationsService } from '../../../../global/global-variations.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  administrator: any = {};

  constructor(
    public modal: GlobalVariationsService
  ) {

  }

  handleCreateCompany(event: Event): void {
    event.preventDefault();
    // Lógica para crear la empresa
  }

  modalCloseCreate(): void {
    this.modal.modalState = false;
  }

  openModal(): void {
    this.modal.modalState = true;
  }

}
