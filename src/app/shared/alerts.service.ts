import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  successAlert(message: string) {

  }

  warrningAlert(message: string) {
    return Swal.fire({
      title: message,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    })
  }

  errorAlert(message: string) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
