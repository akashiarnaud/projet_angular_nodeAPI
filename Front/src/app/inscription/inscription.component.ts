import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {RestApiService} from "../shared/rest-api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(
    public api : RestApiService,
    public router : Router
  ) { }

  ngOnInit() {
  }
  inscription(){
    let u = (<HTMLInputElement>document.getElementById("username")).value;
    let p = (<HTMLInputElement>document.getElementById("password")).value;
    const user = {username : u,password :p};
    this.api.createUser(user).subscribe((data: {}) => { this.router.navigate(['/login']) })
  }
}
