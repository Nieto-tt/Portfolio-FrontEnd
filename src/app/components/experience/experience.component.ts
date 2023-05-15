import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExperienceDTO } from 'src/app/model/experienceDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  @Input() isLogged!: boolean;
  @Input() userId! : number;
  @Input() listExperience: ExperienceDTO[] = [];
  @Output() recargandoPortfolio = new EventEmitter<any>();

  experience!: ExperienceDTO;
  tituloModal: string = "";
  Edit: boolean = false;

  constructor(private portfolioServ : PortfolioService){}
  
  ngOnInit(): void {
  }

  openModal(){
    let expe = {id:0,userId:this.userId,companyName:"",jobTitle:"",startDate:"",endDate:"",jobDescription:"",imageUrl:""};
    this.experience = expe;
    this.tituloModal = "Agregar elemento a Proyectos";
    this.Edit = true;
  }

  openEdit(expe: ExperienceDTO){
    this.experience = expe;
    this.tituloModal = "Editar Proyecto"+this.experience.companyName;
    this.Edit = true;
  }

  deleteExperience(expeId:any){
    if(expeId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteExperience(expeId).subscribe(data => {
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
