import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import Swal from 'sweetalert2';
import { switchMap, of, from} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  id: any;
  constructor(private userService:UserService){}
  users:any[];

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.userService.getUsers().subscribe(
      response =>{
        console.log(response); // Agrega esta línea
        if(response.code === 200){
          this.users = response.data;
        }
      },
      error =>{
        console.log("Error en el servidor");
      }
    )
  }

  crear() {
    Swal.fire({
      title: 'Agregar Usuario',
      html: `<div class="form-group">
            <i class="fa fa-user"></i> 
            <label for="nombre">&nbsp; Nombre:</label> 
            <input id="swal-input1" class="swal2-input" placeholder="Nombre"> 
            </div>
            <div class="form-group">
            <i class="fa fa-envelope"></i> 
            <label for="nombre">&nbsp; Email:</label> 
            <input id="swal-input2" class="swal2-input" placeholder="Email"> 
            </div>
            <div class="form-group">
            <i class="fa fa-user"></i> 
            <label for="nombre">&nbsp; Rol:</label> 
            <input id="swal-input3" class="swal2-input" placeholder="Rol"> 
            </div>
            <div class="form-group">
            <i class="fa fa-key"></i> 
            <label for="nombre">&nbsp;</label> 
            <input id="swal-input4" class="swal2-input" placeholder="Contraseña">
            </div>`,
      focusConfirm: false,
      preConfirm: () => {
        const name = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const email = (document.getElementById('swal-input2') as HTMLInputElement).value;
        const role = (document.getElementById('swal-input3') as HTMLInputElement).value;
        const password = (document.getElementById('swal-input4') as HTMLInputElement).value;
        return this.userService.addUser(name, email, role, password)
          .subscribe(
            response =>{
              console.log(response); // Agrega esta línea
              if(response.code === 200){
                this.users = response.data;
                this.listar();
              }
            },
            error =>{
              console.log("Error en el servidor");
            }
          )
      },
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Usuario Agregado!',
          'El usuario ha sido agregado exitosamente.',
          'success');
      }
    });
  }
  

  editar() {
    Swal.fire({
      title: 'Editar Usuario',
      input: 'text',
      inputLabel: 'Ingrese el ID del Usuario',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      showLoaderOnConfirm: true,
      preConfirm: (id) => {
        return this.userService.getUserById(id).pipe(
          switchMap((user) => {
            if (user) {
              return Swal.fire({
                title: 'Editar Usuario',
                html: `<div class="form-group">
                    <i class="fa fa-user"></i> 
                    <label for="nombre">&nbsp; Nombre:</label> 
                    <input id="swal-input1" class="swal2-input" placeholder="Nombre"> 
                    </div>
                    <div class="form-group">
                    <i class="fa fa-envelope"></i> 
                    <label for="nombre">&nbsp; Email:</label> 
                    <input id="swal-input2" class="swal2-input" placeholder="Email"> 
                    </div>
                    <div class="form-group">
                    <i class="fa fa-user"></i> 
                    <label for="nombre">&nbsp; Rol:</label> 
                    <input id="swal-input3" class="swal2-input" placeholder="Rol"> 
                    </div>
                    <div class="form-group">
                    <i class="fa fa-key"></i> 
                    <label for="nombre">&nbsp;</label> 
                    <input id="swal-input4" class="swal2-input" placeholder="Contraseña">
                    </div>`,
                focusConfirm: false,
                preConfirm: () => {
                  const name = (document.getElementById('swal-input1') as HTMLInputElement).value;
                  const email = (document.getElementById('swal-input2') as HTMLInputElement).value;
                  const role = (document.getElementById('swal-input3') as HTMLInputElement).value;
                  const password = (document.getElementById('swal-input4') as HTMLInputElement).value;
                  return this.userService.updateUser(id, name, email, role, password);

                },
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Usuario Editado!',
                    'El usuario ha sido editado exitosamente.',
                    'success');
                }
                this.listar();
              });
            } else {
              return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario no encontrado',
              });
            }
          })
        );
      },
    });
  }
  
  

  eliminar() {
    Swal.fire({
      title: 'Eliminar usuario',
      text: 'Confirmar el ID del usuario que deseas eliminar:',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar un ID';
        }
      },
      preConfirm: (id) => {
        return this.userService.deleteUser(id)
          .toPromise()
          .then(() => {
            return true;
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Error eliminando usuario: ${error.message}`
            );
          });
      },
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Usuario eliminado!',
          'El usuario ha sido eliminado exitosamente.',
          'success'
        );
        this.listar();
      }
    });
  }
}
