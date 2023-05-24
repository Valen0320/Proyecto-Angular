import { Component, OnInit } from '@angular/core';
import { AristaService } from 'app/shared/services/arista.service';
import { CityService } from 'app/shared/services/city.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aristas',
  templateUrl: './aristas.component.html',
  styleUrls: ['./aristas.component.scss']
})
export class AristasComponent implements OnInit {
  aristaId: any;
  aristas:any[];
  cities: any = [];
  constructor(private aristaService:AristaService, private cityService: CityService){
    this.cityService.getCities().subscribe(
      (response) => {
        if (response.code === 200) {
          this.cities = response.data;
        }
      },
      (error) => {
        console.log("Error en el servidor.");
      }
    );
  }

  ngOnInit(): void {
    this.listar();
  }

  getCityName(idlocal: number): string {
    const city = this.cities.find(city => city.idlocal === idlocal);
    return city ? city.name : '';
  }
  

  listar(){
    this.aristaService.getAristas().subscribe(
      response =>{
        console.log(response); // Agrega esta línea
        if(response.code === 200){
          this.aristas = response.data;
        }
      },
      error =>{
        console.log("Error en el servidor");
      }
    )
  }

  agregar() {
    const aristaIdElement = document.getElementById('aristaId') as HTMLSelectElement;
    const originElement = document.getElementById('origin') as HTMLSelectElement;
    const destinyElement = document.getElementById('destiny') as HTMLSelectElement;
    const weightElement = document.getElementById('weight') as HTMLInputElement;
  
    const aristaId = aristaIdElement.value;
    const origin = originElement.value;
    const destiny = destinyElement.value;
    const weight = parseFloat(weightElement.value);
  
    if (aristaId && origin && destiny && !isNaN(weight)) {
      this.aristaService.addArista(aristaId, origin, destiny, weight).subscribe(
        response => {
          console.log(response);
          if (response.code === 200) {
            this.aristas = response.data;
            this.listar();
          }
        },
        error => {
          console.log("Error en el servidor");
        }
      );
      Swal.fire(
        'Arista Agregada!',
        'La arista ha sido agregado exitosamente.',
        'success');
      this.listar();
    } else {
      console.log("Datos ingresados inválidos.");
    }
  
    this.listar();
  }


  eliminar() {
    Swal.fire({
      title: 'Eliminar arista',
      text: 'Confirmar el ID de la arista que deseas eliminar:',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar un ID';
        }
      },
      preConfirm: (aristaId) => {
        return this.aristaService.deleteArista(aristaId)
          .toPromise()
          .then(() => {
            return true;
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Error eliminando arista: ${error.message}`
            );
          });
      },
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Arista eliminado!',
          'La arista ha sido eliminado exitosamente.',
          'success'
        );
        this.listar();
      }
    });
  }
}
