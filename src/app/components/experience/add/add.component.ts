import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input ,OnInit, Output} from '@angular/core';
import { ExperienceDTO } from 'src/app/model/experienceDTO';
import { responseDTO } from 'src/app/model/responseDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  //traigo del componente padre un objeto del tipo ExpeDTO
  @Input() experience!: ExperienceDTO;
  //creo los eventos para poder enviar al componente padre objetos del tipo Experiencia
  @Output() cerrandoModal = new EventEmitter<any>();
  
  //objeto de uso local
  expe!: ExperienceDTO;
  //respuesta que viene del Backend
  respta: responseDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    //guardo vlores que vienen del padre en el objeto local
    console.log(this.expe = this.experience);
  }

  //envío al padre objeto con valores ingresados en el modal
  newExperience(nuevaExpe: ExperienceDTO){
    console.log(nuevaExpe);
    if (nuevaExpe.jobTitle != ""){
      this.mostrarMsj = true;
      this.portfolioServ.newExperience(nuevaExpe).subscribe(response => {
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
  editExperience(expeEditada: ExperienceDTO){
    if (expeEditada.jobTitle != ""){
      this.mostrarMsj = true;
      let idExpeEditada: any = expeEditada.expId;
      this.portfolioServ.editExperience(idExpeEditada, expeEditada).subscribe(response => {
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
