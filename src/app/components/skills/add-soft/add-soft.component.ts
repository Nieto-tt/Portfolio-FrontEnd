import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { responseDTO } from 'src/app/model/responseDTO';
import { softskillsDTO } from 'src/app/model/softskillsDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-soft',
  templateUrl: './add-soft.component.html',
  styleUrls: ['./add-soft.component.css']
})
export class AddSoftComponent implements OnInit{

  @Input() softskill!: softskillsDTO;

  @Output() cerrandoModal = new EventEmitter<any>();
  
  //objeto de uso local
  soft!: softskillsDTO;
  //respuesta que viene del Backend
  respta: responseDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    //guardo vlores que vienen del padre en el objeto local
    console.log(this.soft = this.softskill);
  }

  //envío al padre objeto con valores ingresados en el modal
  newSoftSkill(nuevasoft: softskillsDTO){
    console.log(nuevasoft);
    if (nuevasoft.skillName != ""){
      this.mostrarMsj = true;
      this.portfolioServ.newSoftSkill(nuevasoft).subscribe(response => {
        if (response instanceof HttpResponse) {
          if (response.status === 201) {
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
      this.respta.msj = "No se puede agregar un elemento sin título";
    }
  }

  //envío al padre objeto con valores modificados en el modal
  editSoftSkill(softEditada: softskillsDTO){
    if (softEditada.skillName != ""){
      this.mostrarMsj = true;
      let idsoftEditada: any = softEditada.softId;
      this.portfolioServ.editSoftSkill(idsoftEditada, softEditada).subscribe(response => {
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
      this.respta.msj = "No se puede modificar un elemento sin asignar un puesto";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista del portfolio
    this.cerrandoModal.emit();
    //recargar vista de esta seccion del portfolio
  }
}
