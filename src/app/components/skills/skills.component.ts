import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SkillsDTO } from 'src/app/model/skillsDTO';
import { softskillsDTO } from 'src/app/model/softskillsDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  @Input() isLogged!: boolean;
  @Input() userId! : number;
  @Input() listSkill: SkillsDTO[] = [];
  @Input() listSoft: softskillsDTO[] = [];
  @Output() recargandoPortfolio = new EventEmitter<any>();

  skill!: SkillsDTO;
  softskill!: softskillsDTO;
  tituloModal: string = "";
  Edit: boolean = false; 

  isSoft: boolean = false;
  isSkill: boolean = false;

  constructor(private portfolioServ : PortfolioService){}
  
  ngOnInit(): void {
  }

  abrirModalAgregar() : void {
    if (this.isSoft){
      let soft = {id:0,userId:this.userId,skillName:"",icon:""};
      this.softskill = soft;
      this.tituloModal = "Agregar elemento a Habilidades Blandas";
      this.Edit = true; 
    } else {
      let skil = {skillId:0,userId:this.userId,nivelId:0, skillName:"",proficiencyLevel:"",icon:""};
      this.skill = skil;
      this.tituloModal = "Agregar elemento a Habilidades Técnicas";
      this.Edit = true;
    }
  }

  abrirEditarHabTecnica(skil: SkillsDTO): void {
    this.skill = skil;
    this.tituloModal = "Editar elemento en Habilidades Técnicas";
    this.Edit = true;    
  }

  deleteSkill(skillId: any): void {
    if(skillId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteSkill(skillId).subscribe(data => {
        alert("El elemento ha sido eliminado");
        this.recargandoPortfolio.emit();
        //this.listarPorNIvel();
        window.location.reload();
        });
    }
  }

  abrirEditarHabBlanda(soft: softskillsDTO): void {
    this.softskill = soft;
    this.tituloModal = "Editar elemento en Habilidades Blandas";
    this.Edit = true;
  }

  deleteSoftSkill(softId: any): void {
    if(softId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteSoftSkill(softId).subscribe(data => {
        alert("El elemento ha sido eliminado");
        this.recargandoPortfolio.emit();
        window.location.reload();
        });
    }
  }

  closeModal(): void {
    this.isSoft = false;
    this.Edit = false;
    this.isSkill = false;

    //recarga la vista después de cerrar modal agregar o editar
    window.location.reload();
  }
}
