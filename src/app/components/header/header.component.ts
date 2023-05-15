import { Component, Input } from '@angular/core';
import { userDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() user!: userDTO;

  constructor(){}
}
