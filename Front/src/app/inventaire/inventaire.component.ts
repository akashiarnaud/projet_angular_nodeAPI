import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../shared/rest-api.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent implements OnInit {
  Items: any = [];
  constructor(
    public api:RestApiService,
    public router:Router
  ) { }

  ngOnInit() {
    this.getItem();
  }
  getItem(){
     this.api.getItem().subscribe((data : {}) => {
      this.Items = data;
    })
  }
  updateItem(){
      
  }
  createItem(){

  }
  deleteItem(){

  }
}
