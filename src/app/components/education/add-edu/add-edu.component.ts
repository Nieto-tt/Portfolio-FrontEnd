import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducationDTO } from 'src/app/model/educationDTO';
import { responseDTO } from 'src/app/model/responseDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {

  @Input() education!: EducationDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  edu! : EducationDTO;
  //respuesta que viene del Backend
  respta: responseDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.edu = this.education;
  }

  newEducation(newEducation:EducationDTO){
    if (newEducation.degreeName != ""){
      this.mostrarMsj = true;
      this.portfolioServ.newEducation(newEducation).subscribe(response => {
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

  editEducation(editedcertification:EducationDTO){
    if (editedcertification.degreeName != ""){
      this.mostrarMsj = true;
      let idcertEditado: any = editedcertification.eduId;
      this.portfolioServ.editEducation(idcertEditado, editedcertification).subscribe(response => {
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
      this.respta.msj = "No se puede modificar un elemento sin título";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista de esta seccion del portfolio
    this.cerrandoModal.emit();
  }
}
