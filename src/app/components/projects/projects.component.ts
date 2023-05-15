import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsDTO } from 'src/app/model/projectsDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  @Input() isLogged!: boolean;
  @Input() userId! : number;
  @Input() listProjects: ProjectsDTO[] = [];
  @Output() recargandoPortfolio = new EventEmitter<any>();

  project!: ProjectsDTO;
  tituloModal: string = "";
  Edit: boolean = false;

  constructor(private portfolioServ : PortfolioService){}
  
  ngOnInit(): void {

  }

  openModal(){
    let proye = {projectId:0,userId:this.userId,title:"",description:"",startDate:"",endDate:"",imageUrl:"",liveUrl:""};
    this.project = proye;
    this.tituloModal = "Agregar elemento a Proyectos";
    this.Edit = true;
  }

  openEdit(proye: ProjectsDTO){
    this.project = proye;
    this.tituloModal = "Editar elemento en Proyecto";
    this.Edit = true;
  }

  deleteProject(proyeId:any){
    console.log(proyeId);
    if(proyeId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteProject(proyeId).subscribe(data => {
        alert("Proyecto eliminado con éxito");
        this.recargandoPortfolio.emit();
        });
    }
  }

  closeModal(){
    this.Edit = false;
    this.recargandoPortfolio.emit();
  }

}
