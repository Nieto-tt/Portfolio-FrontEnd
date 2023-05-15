import { Component, OnInit } from '@angular/core';
import { PortfolioDTO } from 'src/app/model/PortfolioDTO';
import { userDTO } from 'src/app/model/userDTO';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  miPortfolio! : PortfolioDTO;
  user!: userDTO;

  isLogged : boolean = false;

  constructor(private portfolioServ : PortfolioService, private auth: AuthenticationService) { }

  ngOnInit(): void {    
    this.cargarVista();
    this.isLogged = !!this.auth.getToken();
  }

  cargarVista(){
    this.portfolioServ.getData().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
