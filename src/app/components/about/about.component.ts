import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { responseDTO } from 'src/app/model/responseDTO';
import { userDTO } from 'src/app/model/userDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  @Input() isLogged!: boolean;
  @Input() user!: userDTO;
  @Output() recargandoPortfolio = new EventEmitter<any>();

  perso!: userDTO;
  tituloModal: string = "Editar información personal";
  mostrarMsj: boolean = false;
  respta: responseDTO = {salioBien: false, msj: ""};

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.perso = this.user;
  }

  openModal(perso: userDTO){
    this.perso = perso;
  }

  editUser(userEdited: userDTO) {
    if (userEdited.name && userEdited.ocupation && userEdited.description && userEdited.imageUrl) {
      this.mostrarMsj = true;
  
      this.portfolioServ.editUser(userEdited).subscribe(response => {
        if (response instanceof HttpResponse) {
          if (response.status === 200) {
            console.log("La petición se realizó exitosamente");
            console.log("Mensaje del servidor:", response.body);
          } else {
            console.log("La petición no fue exitosa");
          }
        }
      }, error => {
        this.respta = {salioBien: true, msj: error.error.text};
      });
    } else {
      this.mostrarMsj = true;
      this.respta = { salioBien: false, msj: "Por favor, ingrese todos los campos requeridos" };
      console.log(this.respta);
    }
  }

  closeModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista 
    this.recargandoPortfolio.emit();
  }
}
