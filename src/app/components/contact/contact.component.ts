import { Component, Input, OnInit } from '@angular/core';
import { userDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() user!: userDTO;

  email?: string;

  constructor() { }

  ngOnInit(): void {
    this.email = this.user!.email;
  }
}
