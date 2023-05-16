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

  certification!: CertificationsDTO;
  tituloModal: string = "";
  Edit: boolean = false;

  constructor(private portfolioServ : PortfolioService){}
  
  ngOnInit(): void {

  }

  openModal(){
    console.log(this.certification);
    let edu = {certId:0,userId:this.userId, certificationName:"",institutionName:"",dateObtained:"",certificationUrl:"",imageUrl:""};
    this.certification = edu;
    this.tituloModal = "Agregar elemento a Certificados";
    this.Edit = true;
  }

  openEdit(cert: CertificationsDTO){
    this.certification = cert;
    this.tituloModal = "Editar elemento en Certificados";
    this.Edit = true;
  }

  deleteCertification(certId:any){
    if(certId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.deleteCertification(certId).subscribe(data => {
        alert("¡Certificado eliminado con éxito!");
        this.recargandoPortfolio.emit();
        });
    }
  }

  closeModal(){
    this.Edit = false;
    this.recargandoPortfolio.emit();
  }
}
