import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  personnage(){
    this.router.navigate(['/personnage']);
  }
  inventaire(){
    this.router.navigate(['/inventaire']);
  }
  creativite(){
    this.router.navigate(['/creativite']);
  }
}
