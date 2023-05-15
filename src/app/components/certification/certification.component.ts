import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CertificationsDTO } from 'src/app/model/certificationsDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit{

  @Input() isLogged!: boolean;
  @Input() userId! : number;
  @Input() listCert: CertificationsDTO[] = [];
  @Output() recargandoPortfolio = new EventEmitter<any>();

  education!: CertificationsDTO;
  tituloModal: string = "";
  Edit: boolean = false;

  constructor(private portfolioServ : PortfolioService){}
  
  ngOnInit(): void {

  }

  openModal(){
    let edu = {certId:0,userId:this.userId, certificationName:"",institutionName:"",dateObtained:"",certificationUrl:"",imageUrl:""};
    this.education = edu;
    this.tituloModal = "Agregar elemento a Educación";
    this.Edit = true;
  }

  openEdit(edu: CertificationsDTO){
    this.education = edu;
    this.tituloModal = "Editar elemento en Educación";
    this.Edit = true;
  }

  deleteCertification(eduId:any){
    if(eduId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteCertification(eduId).subscribe(data => {
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
