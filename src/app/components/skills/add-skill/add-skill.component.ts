import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { responseDTO } from 'src/app/model/responseDTO';
import { SkillsDTO } from 'src/app/model/skillsDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit{

  @Input() skill!: SkillsDTO;

  @Output() cerrandoModal = new EventEmitter<any>();
  
  //objeto de uso local
  skil!: SkillsDTO;
  //respuesta que viene del Backend
  respta: responseDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    //guardo vlores que vienen del padre en el objeto local
    this.skil = this.skill;
  }

  //envío al padre objeto con valores ingresados en el modal
  newSkill(newSkill: SkillsDTO){
    console.log(newSkill);
    if (newSkill.skillName != ""){
      this.mostrarMsj = true;
      this.portfolioServ.newSkill(newSkill).subscribe(response => {
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
  editSkill(skillEditada: SkillsDTO){
    console.log(skillEditada);
    if (skillEditada.skillName != ""){
      this.mostrarMsj = true;
      let idskillEditada: any = skillEditada.skillId;
      this.portfolioServ.editSkill(idskillEditada, skillEditada).subscribe(response => {
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
