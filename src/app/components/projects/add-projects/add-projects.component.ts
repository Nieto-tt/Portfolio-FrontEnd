import { HttpResponse } from '@angular/common/http';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsDTO } from 'src/app/model/projectsDTO';
import { responseDTO } from 'src/app/model/responseDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit{

  @Input() project!: ProjectsDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  proye! : ProjectsDTO;
  //respuesta que viene del Backend
  respta: responseDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.proye = this.project;
  }

  newProject(newProject:ProjectsDTO){
    if (newProject.title != ""){
      this.mostrarMsj = true;
      this.portfolioServ.newProject(newProject).subscribe(response => {
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

  editProject(editedProject:ProjectsDTO){
    if (editedProject.title != ""){
      this.mostrarMsj = true;
      let idProyeEditado: any = editedProject.projectId;
      this.portfolioServ.editProject(idProyeEditado, editedProject).subscribe(response => {
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
