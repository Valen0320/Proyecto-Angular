import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {

  constructor(private userService:UserService){}
  users:any[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      response =>{
        if(response.code === 200){
          this.users = response.data;
          console.log(this.users);
        }
      },
      error =>{
        console.log("Error en el servidor");
      }
    )
  }
}
