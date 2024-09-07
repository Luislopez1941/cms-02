import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdministratorsService } from '../../services/administrators.service';
import { Router } from '@angular/router';
import { ToatsErrorComponent } from '../../components/utils/toats/toats-error/toats-error.component';
import { ToatsWarningComponent } from '../../components/utils/toats/toats-warning/toats-warning.component';
import { ToatsSuccessComponent } from '../../components/utils/toats/toats-success/toats-success.component';
import { GlobalVariationsService } from '../../global/global-variations.service';
import AdministratorComponent from "../../components/sidebar/administrator/administrator.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ToatsWarningComponent, AdministratorComponent, ToatsErrorComponent, ToatsSuccessComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
  user: any = {
    email: '',
    password: ''
  }
  

  constructor(
    private _administratorsService: AdministratorsService,
    public toast: GlobalVariationsService,
    private router: Router
  ) {

  }
 

  dataUser: any

  login() {

    let data = {
      email: this.user.email,
      password: this.user.password
    };
    // Realizar la llamada al servicio de inicio de sesión
    this._administratorsService.customer_login(data).subscribe(

      (data: any) => {
        if (data === undefined) {
        } else {
          if(data.status == 'warning') {
            this.toast.toastWarning = true;
            this.toast.message = data.message
            console.log(data)
            return
          }

          if(data.status == 'success') {
            this.toast.message = data.message
            setTimeout(() => {
                this.toast.toastSuccess = true;
            }, 100); 
            // Guardar datos de usuario y token en el almacenamiento local
            this.dataUser = data.data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('_id', data.data._id);
            // Redirigir a la página principal
            this.router.navigate(['/customers']);
          }
       

        }
      },
      (error: any) => {
        console.error('Error fetching customers:', error);
        this.toast.message == 'Hubo un error'
        this.toast.toastError = true;
      }
    );

    setTimeout(() => {
      this.toast.toastError = false;
      this.toast.toastWarning = false;
      this.toast.toastSuccess = false;
    }, 4000);
  }



}
