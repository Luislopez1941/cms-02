import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { GlobalVariationsService } from '../../../global/global-variations.service';

@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.css'
})
export default class AdministratorComponent {
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


