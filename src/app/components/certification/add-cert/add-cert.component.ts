import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CertificationsDTO } from 'src/app/model/certificationsDTO';
import { responseDTO } from 'src/app/model/responseDTO';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrls: ['./add-cert.component.css']
})
export class AddCertComponent implements OnInit {

  @Input() certification!: CertificationsDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  cert! : CertificationsDTO;
  //respuesta que viene del Backend
  respta: responseDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.cert = this.certification;
  }

  newCertification(newcertification:CertificationsDTO){
    if (newcertification.certificationName != ""){
      this.mostrarMsj = true;
      this.portfolioServ.newCertification(newcertification).subscribe(response => {
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

  editCertification(editedcertification:CertificationsDTO){
    if (editedcertification.certificationName != ""){
      this.mostrarMsj = true;
      let idcertEditado: any = editedcertification.certId;
      this.portfolioServ.editCertification(idcertEditado, editedcertification).subscribe(response => {
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