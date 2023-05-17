import { Component, Input, OnInit } from '@angular/core';
import { userDTO } from 'src/app/model/userDTO';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  @Input() user!: userDTO;
  @Input() isLogged!: boolean;

  gitUsername?: string;
  linkedinUsername?: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    console.log(this.user)
    this.gitUsername = this.user!.gitUsername;
    this.linkedinUsername = this.user!.linkedinUsername;
  }

  goTo(seccion : string){
    console.log(seccion);
    window.location.hash = "";
    window.location.hash = seccion;
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
    window.location.reload();
  }
}
