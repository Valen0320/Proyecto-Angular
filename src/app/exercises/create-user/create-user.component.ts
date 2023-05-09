import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crear(){
    Swal.fire({
      icon: 'success',
      text: 'Usuario creado correctamente'
    })
  }
}
