import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariationsService {

  public toast: boolean = false;

  public toastSuccess: boolean = false;

  public toastWarning: boolean = false;

  public toastError: boolean = false;

  public modalState: boolean = false;

  public message: string = '';

  public tokenGlobal: any = false;

}
