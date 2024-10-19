import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; // Para inyectar servicios
import { GlobalVariationsService } from '../global/global-variations.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService: any = inject(GlobalVariationsService); // Inyectar el servicio
  const router = inject(Router); 


  if (tokenService.tokenGlobal != false) {
    return true; 
  } else {
    router.navigate(['/login']);
    console.log('access blocked')
    return false;
  }
};

