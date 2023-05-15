import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducationDTO } from 'src/app/model/educationDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  @Input() isLogged!: boolean;
  @Input() userId! : number;
  @Input() listEdu: EducationDTO[] = [];
  @Output() recargandoPortfolio = new EventEmitter<any>();

  education!: EducationDTO;
  tituloModal: string = "";
  Edit: boolean = false;

  constructor(private portfolioServ : PortfolioService){}
  
  ngOnInit(): void {

  }

  openModal(){
    let edu = {id:0,userId:this.userId, institutionName:"",degreeName:"",fieldOfStudy:"",startDate:"",endDate:"",imageUrl:""};
    this.education = edu;
    this.tituloModal = "Agregar elemento a Educación";
    this.Edit = true;
  }

  openEdit(edu: EducationDTO){
    this.education = edu;
    this.tituloModal = "Editar elemento en Educación";
    this.Edit = true;
  }

  deleteEducation(eduId:any){
    if(eduId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteEducation(eduId).subscribe(data => {
        alert("¡Educación eliminada con éxito!");
        this.recargandoPortfolio.emit();
        });
    }
  }

  closeModal(){
    this.Edit = false;
    this.recargandoPortfolio.emit();
  }


}