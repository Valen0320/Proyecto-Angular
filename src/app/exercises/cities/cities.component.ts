import { Component, OnInit } from '@angular/core';
import { CityService } from 'app/shared/services/city.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  id: any;
  constructor(private cityService:CityService){}
  cities:any[];

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.cityService.getCities().subscribe(
      response =>{
        console.log(response); // Agrega esta línea
        if(response.code === 200){
          this.cities = response.data;
        }
      },
      error =>{
        console.log("Error en el servidor");
      }
    )
  }

  crear() {
    Swal.fire({
      title: 'Agregar Ciudad',
      html: `<div class="form-group">
            <label for="nombre">&nbsp; ID:</label> 
            <input id="swal-input" class="swal2-input" placeholder="ID"> 
            </div>
            <div class="form-group">
            <label for="nombre">&nbsp; Nombre:</label> 
            <input id="swal-input1" class="swal2-input" placeholder="Nombre"> 
            </div>
            <div class="form-group">
            <label for="nombre">&nbsp; Latitud:</label> 
            <input id="swal-input2" class="swal2-input" placeholder="Latitud"> 
            </div>
            <div class="form-group">
            <label for="nombre">&nbsp; Longitud:</label> 
            <input id="swal-input3" class="swal2-input" placeholder="Longitud"> 
            </div>`,
      focusConfirm: false,
      preConfirm: () => {
        const idlocal = parseFloat((document.getElementById('swal-input') as HTMLInputElement).value);
        const name = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const latitude = parseFloat((document.getElementById('swal-input2') as HTMLInputElement).value);
        const longitude = parseFloat((document.getElementById('swal-input3') as HTMLInputElement).value);
        return this.cityService.addCity(idlocal, name, latitude, longitude)
          .subscribe(
            response =>{
              console.log(response); // Agrega esta línea
              if(response.code === 200){
                this.cities = response.data;
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
          'Ciudad Agregada!',
          'La ciudad ha sido agregado exitosamente.',
          'success');
      }
      this.listar();
    });
  }

  eliminar() {
    Swal.fire({
      title: 'Eliminar ciudad',
      text: 'Confirmar el ID de la ciudad que deseas eliminar:',
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
        return this.cityService.deleteCity(id)
          .toPromise()
          .then(() => {
            return true;
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Error eliminando ciudad: ${error.message}`
            );
          });
      },
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Ciudad eliminada!',
          'La ciudad ha sido eliminado exitosamente.',
          'success'
        );
        this.listar();
      }
    });
  }

}
