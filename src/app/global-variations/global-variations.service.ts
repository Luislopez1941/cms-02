import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariationsService {
    isToggled: boolean = false;
  constructor() { }
}
